(ns src.webproxy.repositories.user
  (:require ["@supabase/supabase-js" :refer [createClient]]
            [promesa.core :as p]))


(defn get-all-users []
  (js/console.log "In get-all-users")
  (p/let [supabase-api-key js/globalThis.process.env.SUPABASE_API_KEY
          supabase-url js/globalThis.process.env.SUPABASE_URL
          supabase (createClient supabase-url supabase-api-key)
          response (-> (.from supabase "user")
                       (.select))
          response-parsed (js->clj response {:keywordize-keys true})
          users (:data response-parsed)]
    (js/console.log "Out get-all-users")
    (prn users)
    users))
