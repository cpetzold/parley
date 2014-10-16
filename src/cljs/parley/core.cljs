(ns parley.core
  (:require
   [figwheel.client :as fw :include-macros true]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponentk]]
   [om-tools.dom :as dom :include-macros true]))

(def state
  (atom {:text "Hello mom"}))

(defcomponentk app
  [[:data text]]
  (render [_]
    (dom/h1 text)))

(om/root
 app
 state
 {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload)
