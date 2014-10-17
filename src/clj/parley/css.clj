(ns parley.css
  (:require
   [garden.def :refer [defstyles]]
   [garden.units :refer [px em percent]]))

(defstyles screen
  [:* {:box-sizing "border-box"}]

  [:body
   {:font {:size (px 18)
           :family 'Helvetica}
    :line-height 1.4
    :color :#222
    :background :#ddd
    :margin 0}]

  [:a
   {:text-decoration "none"}]

  [:h1 :h2 :h3 :h4
   {:margin 0}]

  [:p
   {:margin [[(em 0.5) 0]]}]

  [:#container
   {:background :#fff
    :max-width (px 800)
    :margin [[(px 32) "auto"]]}]

  [:.question-header
   {:padding [[(px 16) (px 21)]]
    :border {:bottom [[(px 10) :solid :#eee]]}}]

  [:.question-text
   {:font {:size (em 2)}}]

  [:.question-description
   {:margin 0
    :color :#666}]

  [:.question-responses
   {:list-style "none"
    :margin 0
    :padding 0}]

  [:.avatar
   {:display "inline-block"
    :background {:size "cover"}}]

  (let [avatar-size 48]
    [:.response
     {:position "relative"
      :padding [[(px 16) (px 21)]]
      :border {:bottom [[(px 1) :solid :#eee]]}}

     [:.avatar
      {:position "absolute"
       :width (px avatar-size)
       :height (px avatar-size)
       :margin {:top (px 4)}
       :border-radius (px 3)}]

     [:.response-body
      {:margin {:left (px (+ avatar-size 16))}}]])

  [:.response-text
   {:margin 0}]

  [:.response-answer
   {:font {:weight 600}}]

  [:.separator
   {:color :#aaa}]

  [:.user-name
   {:font {:weight 600}
    :color :#222}]

  )
