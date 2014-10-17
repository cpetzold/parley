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
                   :avatar "https://pbs.twimg.com/profile_images/472114160130473984/Mn3hcq5I_400x400.jpeg"}
          :marco {:handle "marco"
                  :name "Marco"
                  :avatar "https://avatars0.githubusercontent.com/u/594035?v=2&s=460"}
          :brad {:handle "brad"
                 :name "Brad"
                 :avatar "http://primg.city/query-resize?url=http%3A%2F%2Fs3.amazonaws.com%2Fprismatic-profiles%2Fprimary-image-837232295.jpeg&width=176&height=176"}}

         :questions
         {:does-one-need-to-earn-to-burn
          {:text "Does one need to earn to burn?"
           :description "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."
           :answers {:yes {:text "Yes" :color "green"}
                     :no {:text "No" :color "red"}}
           :responses
           [{:user :brad
             :answer :yes
             :text "If you don't earn to burn, you're probably going to live to learn."}
            {:user :marco
             :answer :yes
             :text "Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam."}
            {:user :conner
             :answer :no
             :text "But you do have to own to pwn."}]}}}))

(defcomponentk response+
  [[:data [:user name avatar]
    [:answer [:text :as answer-text] color]
    text]]
  (render [_]
    (dom/li
     {:class "response"}
     (dom/a
      {:class "avatar"
       :style {:background-image (str "url(" avatar ")")}
       :href "#"})
     (dom/div
      {:class "response-body"}
      (dom/a
       {:class "user-name"
        :href "#"}
       name)
      (dom/p
       {:class "response-text"}
       (dom/span
        {:class "response-answer"
         :style {:color color}}
        answer-text)
       (dom/span {:class "separator"} " — ")
       text)))))

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

(defn populate-answer [answers response]
  (assoc response :answer (get answers (:answer response))))

(defn populate-user [users response]
  (assoc response :user (get users (:user response))))

(defcomponentk app+
  [[:data users [:questions [:does-one-need-to-earn-to-burn :as question]]]]
  (render [_]
    (dom/div
     {:id "container"}
     (om/build question+ (update-in
                          question [:responses]
                          #(mapv (fn [response]
                                   (->> response
                                        (populate-user users)
                                        (populate-answer (:answers question))))
                                 %))))))

(om/root
 app+
 state
 {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload)
