(ns commands.app.name
  (:require [utils.display :refer [display]] 
            [utils.platform :refer [run-in]] 
            [clojure.string :as str]
            ["fs" :as fs]))

(def config {:manifest-path "app.manifest.json"
             :name-paths {:android {:path "android/app/src/main/AndroidManifest.xml"
                                    :pattern "android:label=\"(.+?)\""
                                    :result (fn [new-name] (str "android:label=\"" new-name "\""))}
                          #_#_ :ios {:path "ios/Runner/Info.plist" 
                                :pattern "<key>CFBundleDisplayName</key>\n<string>%%NEW_NAME%%</string>"}}
             :app-id-paths {:android {:path "android/app/build.gradle"
                                      :pattern "applicationId \"com.mariosouto.labs\""}}})

; ==================================================

(defn ^:private app-platform-rename [app-platform]
  (let [new-name "NOVO NOMEEE"
        app-platform-name (first app-platform)
        path (str js/process.env.DSCLI_RUNNING_AT "/" (:path (second app-platform)))
        pattern (:pattern (second app-platform))
        result (:result (second app-platform))
        file-content-start (fs/readFileSync path #js {:encoding "utf-8"})
        file-content-updated (str/replace file-content-start (re-pattern pattern) (result new-name))] 
    (display (str "[" app-platform-name "] Renaming"))
    (fs/writeFileSync path file-content-updated #js {:encoding "utf-8"})
    (display (str "[" app-platform-name "] Done!"))))


; ==================================================

(def ^:private command "app set-name")

(defn ^:private action []
  (display "Renaming app ...") 
  (mapv app-platform-rename (get config :name-paths))
  (display "Rename done!!!"))

(defn define [program]
  (-> program
      (.command command)
      (.action (run-in [:flutter] action))))
