(ns src.webproxy.infra.jwt.main
  (:require ["jsonwebtoken$default" :as jwt]))
; Lib: https://www.npmjs.com/package/jsonwebtoken

(defn sign [payload secret & [options]]
  (.sign jwt (clj->js payload) secret (clj->js options)))


(defn verify [token secret]
  (.verify jwt token (clj->js secret)))

(defn decode [token & options]
  (.decode jwt token (clj->js options)))
