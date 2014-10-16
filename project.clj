(defproject parley "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.1"]
                 [prismatic/om-tools "0.3.4"]
                 [figwheel "0.1.5-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-figwheel "0.1.5-SNAPSHOT"]
            [lein-garden "0.2.1"]]

  :source-paths ["src"]

  :figwheel
  {:css-dirs ["resources/public/css"]}

  :garden
  {:builds
   [{:id "parley"
     :source-paths ["src/clj"]
     :stylesheet parley.css/screen
     :compiler {:output-to "resources/public/css/compiled/parley.css"
                :pretty-print? true}}]}

  :cljsbuild
  {:builds
   [{:id "parley"
     :source-paths ["src/cljs"]
     :compiler {:output-to "resources/public/js/compiled/parley.js"
                :output-dir "resources/public/js/compiled/out"
                :optimizations :none
                :source-map true}}]})
