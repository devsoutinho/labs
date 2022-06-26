(ns src.webproxy.modules.default.default
  (:require [src.webproxy.infra.graphql.main :as gql]))

(defn greet [] "DevSoutinho: Hello World!")
(defn create-text-sample [_ args]
  (get-in args [:input :text]))

(def defaultModule {:typeDefs (gql/type-defs "/src/webproxy/modules/default/default.gql")
                    :resolvers {:Query {:greet (gql/handle-resolver greet)}
                                :Mutation {:createSampleText (gql/handle-resolver create-text-sample)}}})
