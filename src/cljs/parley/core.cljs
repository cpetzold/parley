(ns parley.core
  (:require
   [figwheel.client :as fw :include-macros true]
   [om.core :as om :include-macros true]
   [om-tools.core :refer-macros [defcomponentk]]
   [om-tools.dom :as dom :include-macros true]))

(def state
  (atom {:questions
         {:is-there-an-omnipotent-god
          {:text "Is there an omnipotent god?"
           :description "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue."}}}))

(defcomponentk question+
  [[:data text description]]
  (render [_]
    (dom/div
     {:class "question"}
     (dom/h1 {:class "question-text"} text)
     (dom/p {:class "question-description"} description))))

(defcomponentk app+
  [[:data [:questions is-there-an-omnipotent-god]]]
  (render [_]
    (dom/div
     {:id "container"}
     (om/build question+ is-there-an-omnipotent-god))))

(om/root
 app+
 state
 {:target (. js/document (getElementById "app"))})

(fw/watch-and-reload)
