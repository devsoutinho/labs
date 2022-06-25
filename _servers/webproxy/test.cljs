(ns test
  (:require
   [cljs.test :as t]
   [promesa.core :as p]
   ;%LOAD_TEST_NS_REQUIRE_START%
[src.webproxy.modules.auth.auth-test]
[src.webproxy.modules.default.default-test]
[src.webproxy.modules.posts.posts-test]
;%LOAD_TEST_NS_REQUIRE_END%
   ))


;; [Test Runner]
(defmethod t/report [:cljs.test/default :begin-test-var] [m]
  (println "===" (-> m :var meta :name))
  (println))
;; [./Test Runner]


(defn run-tests []
  (p/let [;%LOAD_TEST_NS_LIST_START%
_ (t/run-tests 'src.webproxy.modules.auth.auth-test)
_ (t/run-tests 'src.webproxy.modules.default.default-test)
_ (t/run-tests 'src.webproxy.modules.posts.posts-test)
;%LOAD_TEST_NS_LIST_END%
          ])
  (println "Running tests..."))
