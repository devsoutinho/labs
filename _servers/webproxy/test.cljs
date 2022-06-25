(ns test
  (:require
   [cljs.test :as t]
   ;%LOAD_TEST_NS_REQUIRE_START%
   [src.webproxy.modules.auth.auth-test]
   [src.webproxy.modules.default.default-test]
   [src.webproxy.modules.posts.posts-test]
;%LOAD_TEST_NS_REQUIRE_END%
   ))

(def test-files [;%LOAD_TEST_NS_LIST_START%
                 'src.webproxy.modules.auth.auth-test
                 'src.webproxy.modules.default.default-test
                 'src.webproxy.modules.posts.posts-test
;%LOAD_TEST_NS_LIST_END%
                 ])

;; [Test Runner]
(defmethod t/report [:cljs.test/default :begin-test-var] [m]
  (println "===" (-> m :var meta :name))
  (println))
;; [./Test Runner]


(defn run-tests []
  (mapv t/run-tests test-files)
  (println "Running tests..."))
