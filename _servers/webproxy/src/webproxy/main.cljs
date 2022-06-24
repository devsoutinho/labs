(ns src.webproxy.main
  {:clj-kondo/config '{:lint-as {promesa.core/let clojure.core/let
                                 example/defp clojure.core/def}}}
  (:require ["./js/main.js" :refer [startApolloServer]]
            ["fs" :as fs]
            [src.webproxy.modules.default.default :as module.default]
            [src.webproxy.modules.posts.posts :as module.posts]))


(def videoTypeDefs {:type/Query {:greet :String}})

(def typeDefs [(fs/readFileSync (:typeDefs module.default/defaultModule) #js {:encoding "utf8"})
               (fs/readFileSync (:typeDefs module.posts/postsModule) #js {:encoding "utf8"})])

(def resolvers (into {} [(:resolvers module.default/defaultModule)
                         (:resolvers module.posts/postsModule)]))

(startApolloServer (clj->js typeDefs) (clj->js resolvers))
