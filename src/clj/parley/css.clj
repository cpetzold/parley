(ns parley.css
  (:require
   [garden.def :refer [defstyles]]
   [garden.units :refer [px percent]]))

(defstyles screen
  [:* {:box-sizing "border-box"}]

  [:body
   {:font {:size (px 16)
           :family 'Helvetica}
    :color :#222
    :background :#eee
    :margin 0}]

  [:h1 :h2 :h3 :h4 :p
   {:margin 0}]

  [:#container
   {:background :#fff
    :max-width (px 800)
    :margin [[0 "auto"]]
    :padding (px 32)}]

  [:.question-header
   {:margin {:bottom (px 32)}}]

  [:.question-responses
   {:list-style "none"
    :margin 0
    :padding 0}]

  [:.response
   {:margin {:bottom (px 16)}}]

  [:.avatar
   {:display "inline-block"
    :width (px 32)
    :height (px 32)
    :background {:size "cover"}
    :border-radius (px 3)}]

  [:.response
   [:.avatar
    {:margin {:right (px 8)}}]
   ]

  )
