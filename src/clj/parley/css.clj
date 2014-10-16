(ns parley.css
  (:require
   [garden.def :refer [defstyles]]
   [garden.units :refer [vw vh px percent]]))

(defstyles screen
  [:body
   {:font {:family 'Helvetica}
    :color :#222
    :background {:color :#f2f2f2}}])
