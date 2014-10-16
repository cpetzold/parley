(ns parley.core
  (:require
   [figwheel.client :as fw :include-macros true]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponentk]]
   [om-tools.dom :as dom :include-macros true]))

(def state
  (atom {:users
         {:conner {:handle "conner"
                   :name "Conner"
                   :bio "Pwner Extraordinaire"
                   :avatar "https://pbs.twimg.com/profile_images/472114160130473984/Mn3hcq5I_400x400.jpeg"}
          :marco {:handle "marco"
                  :name "Marco"
                  :bio "Climbs all the rocks"
                  :avatar "https://avatars0.githubusercontent.com/u/594035?v=2&s=460"}
          :brad {:handle "brad"
                 :name "Brad"
                 :bio "Weird city burn"
                 :avatar "http://primg.city/query-resize?url=http%3A%2F%2Fs3.amazonaws.com%2Fprismatic-profiles%2Fprimary-image-837232295.jpeg&width=176&height=176"}}

         :questions
         {:is-there-an-omnipotent-god
          {:text "Is there an omnipotent god?"
           :description "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
           :responses
           [{:user :brad
             :text "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum."}
            {:user :marco
             :text "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."}
            {:user :conner
             :text "No, pwned!"}]}}}))

(defcomponentk user+
  [[:data handle name bio avatar]]
  (render [_]
    (dom/div
     {:class "user"}
     (dom/a
      {:class "avatar"
       :style {:background-image (str "url(" avatar ")")}
       :href "#"})
     (dom/a
      {:class "user-name"
       :href "#"}
      name)
     (dom/div {:class "user-bio"} bio))))

(defcomponentk response+
  [[:data text user]]
  (render [_]
    (dom/li
     {:class "response"}
     (om/build user+ user)
     (dom/div {:class "response-text"} text))))

(defcomponentk question+
  [[:data text description responses]]
  (render [_]
    (dom/div
     {:class "question"}
     (dom/div
      {:class "question-header"}
      (dom/h1 {:class "question-text"} text)
      (dom/p {:class "question-description"} description))

     (dom/ol
      {:class "question-responses"}
      (om/build-all response+ responses)))))

(defn populate-user [users response]
  (assoc response :user (get users (:user response))))

(defn populate-users [users question]
  (update-in question [:responses] #(mapv (partial populate-user users) %)))

(defcomponentk app+
  [[:data users [:questions is-there-an-omnipotent-god]]]
  (render [_]
    (dom/div
     {:id "container"}
     (om/build question+ (populate-users users is-there-an-omnipotent-god)))))

(om/root
 app+
 state
 {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload)