(ns webproxy.main
  {:clj-kondo/config '{:lint-as {promesa.core/let clojure.core/let
                                 example/defp clojure.core/def}}}
  (:require ["./js/main.js" :refer [startApolloServer]]))


(def defaultTypeDefs "
type Query {
   greet: String
}
")
(def typeDefs [defaultTypeDefs])

(def resolvers {:Query {:greet (fn [_ _] "DevSoutinho: Hello World!")}})

(startApolloServer (clj->js typeDefs) (clj->js resolvers))
