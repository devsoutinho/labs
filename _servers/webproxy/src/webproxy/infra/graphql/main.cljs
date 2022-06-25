(ns src.webproxy.infra.graphql.main
  (:require [promesa.core :as p]))


(defn type-defs [gql-file-path]
  (str (js/process.cwd) gql-file-path))


(defn handle-resolver [callback]
  (fn [& args]
    (p/let [callback-args (js->clj args {:keywordize-keys true})
            output-base (apply callback callback-args)
            output (clj->js output-base)]
      output)))
