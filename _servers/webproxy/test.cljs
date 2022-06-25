(ns test
  (:require
   [cljs.test :as t]
   ; %LOAD_TEST_NS%
   [src.webproxy.modules.auth.auth-test]
   [src.webproxy.modules.default.default-test]
   ; %LOAD_TEST_NS%
   ))

;; print name of each test
(defmethod t/report [:cljs.test/default :begin-test-var] [m]
  (println "===" (-> m :var meta :name))
  (println))

(def test-files [; %LOAD_TEST_NS%
                 'src.webproxy.modules.auth.auth-test
                 'src.webproxy.modules.default.default-test
                 ; %LOAD_TEST_NS%
                 ])

(defn run-tests []
  (mapv t/run-tests test-files)
  (println "Running tests..."))
