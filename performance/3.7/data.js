window.BENCHMARK_DATA = {
  "lastUpdate": 1710856707747,
  "repoUrl": "https://github.com/Nikikuzi/dacite-soft",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nikikuzi@gmail.com",
            "name": "Mikita Kuzniatsou",
            "username": "Nikikuzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8ba2316fd7bd1a8eb36c7c0fcb7f0ba995e6f5f",
          "message": "Update LICENSE",
          "timestamp": "2024-03-19T16:45:15+04:00",
          "tree_id": "010bd332e70a8bbc5f583c314082cdbe019b8d9a",
          "url": "https://github.com/Nikikuzi/dacite-soft/commit/c8ba2316fd7bd1a8eb36c7c0fcb7f0ba995e6f5f"
        },
        "date": 1710853725326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 19314.789703037648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021224346511436176",
            "extra": "mean: 51.77379693876395 usec\nrounds: 4900"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 510.819296705493,
            "unit": "iter/sec",
            "range": "stddev: 0.00007489816141795652",
            "extra": "mean: 1.9576394361948672 msec\nrounds: 431"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 512.6615361687064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000195466526455751",
            "extra": "mean: 1.9506046961770123 msec\nrounds: 497"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6595.648197430972,
            "unit": "iter/sec",
            "range": "stddev: 0.000004092709594822093",
            "extra": "mean: 151.61512107172476 usec\nrounds: 4105"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 504.4950418137027,
            "unit": "iter/sec",
            "range": "stddev: 0.000025255043968019534",
            "extra": "mean: 1.9821800357143546 msec\nrounds: 476"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 251872.37200024803,
            "unit": "iter/sec",
            "range": "stddev: 5.615839731616858e-7",
            "extra": "mean: 3.970264749795643 usec\nrounds: 17356"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 445.0397358411175,
            "unit": "iter/sec",
            "range": "stddev: 0.000025243153345105984",
            "extra": "mean: 2.246990368421861 msec\nrounds: 399"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 20.05167245811666,
            "unit": "iter/sec",
            "range": "stddev: 0.001870027103642367",
            "extra": "mean: 49.87115174999843 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nikikuzi@gmail.com",
            "name": "Mikita Kuzniatsou",
            "username": "Nikikuzi"
          },
          "committer": {
            "email": "nikikuzi@gmail.com",
            "name": "Mikita Kuzniatsou",
            "username": "Nikikuzi"
          },
          "distinct": true,
          "id": "07dd8e0e383ce5f3c41bb8c225d078432db3c045",
          "message": "addeed allow_missing_fields",
          "timestamp": "2024-03-19T17:57:37+04:00",
          "tree_id": "f6c5efdf97cd2c157687d5be22acabcbd4ae6fae",
          "url": "https://github.com/Nikikuzi/dacite-soft/commit/07dd8e0e383ce5f3c41bb8c225d078432db3c045"
        },
        "date": 1710856705515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 19168.144246050622,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024111714418676306",
            "extra": "mean: 52.1698912092671 usec\nrounds: 4789"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 504.8270777150257,
            "unit": "iter/sec",
            "range": "stddev: 0.00002117078372364442",
            "extra": "mean: 1.9808763121943684 msec\nrounds: 410"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 509.3232772128792,
            "unit": "iter/sec",
            "range": "stddev: 0.00003180250069927852",
            "extra": "mean: 1.9633895498988458 msec\nrounds: 491"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6503.257102705593,
            "unit": "iter/sec",
            "range": "stddev: 0.000005638054097900166",
            "extra": "mean: 153.76910126834187 usec\nrounds: 4098"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 498.03700832448277,
            "unit": "iter/sec",
            "range": "stddev: 0.000018171464289294324",
            "extra": "mean: 2.0078829148947035 msec\nrounds: 470"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 246232.63394105886,
            "unit": "iter/sec",
            "range": "stddev: 4.139216586878655e-7",
            "extra": "mean: 4.061200109809051 usec\nrounds: 18225"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 447.47434392869906,
            "unit": "iter/sec",
            "range": "stddev: 0.000030737574584211476",
            "extra": "mean: 2.2347649950615738 msec\nrounds: 405"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 19.874011447046048,
            "unit": "iter/sec",
            "range": "stddev: 0.0023622403246450607",
            "extra": "mean: 50.31696809999744 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}