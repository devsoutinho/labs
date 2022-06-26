(ns src.webproxy.main
  (:require ["./js/main.js" :refer [startApolloServer]]
            ["fs" :as fs]
            [src.webproxy.modules.default.default :as module.default]
            [src.webproxy.modules.posts.posts :as module.posts]
            [src.webproxy.modules.auth.auth :as module.auth]))




(def videoTypeDefs {:type/Query {:greet :String}})

(def typeDefs [(fs/readFileSync (:typeDefs module.default/defaultModule) #js {:encoding "utf8"})
               (fs/readFileSync (:typeDefs module.posts/postsModule) #js {:encoding "utf8"})
               (fs/readFileSync (:typeDefs module.auth/authModule) #js {:encoding "utf8"})])

(def resolvers (merge-with into
                           (:resolvers module.default/defaultModule)
                           (:resolvers module.posts/postsModule)
                           (:resolvers module.auth/authModule)))

(startApolloServer (clj->js typeDefs) (clj->js resolvers))
