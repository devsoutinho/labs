(ns webproxy.main
  (:require ["express$default" :as express]))

(def app (express))
(def port (if js/process.env.PORT
            js/process.env.PORT
            3000))

(.get app "/"
      (fn foo [_req res]
        (.send res "DevSoutinho: Hello World!")))

(.listen app port
         (fn []
           (println "Example app listening on port" port)))
