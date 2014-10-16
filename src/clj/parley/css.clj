(ns parley.css
  (:require
   [garden.def :refer [defstyles]]
   [garden.units :refer [px percent]]))

(defstyles screen
  [:*
   {:box-sizing "border-box"}]

  [:body
   {:font {:size (px 16)
           :family 'Helvetica}
    :color :#222
    :background :#eee
    :margin 0}]

  [:h1 :h2 :h3 :h4
   {:margin 0}]

  [:#container
   {:background :#fff
    :max-width (px 800)
    :margin [[0 "auto"]]
    :padding (px 32)}])
