window.BENCHMARK_DATA = {
  "lastUpdate": 1710856704814,
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
        "date": 1710853726386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 25259.950135693376,
            "unit": "iter/sec",
            "range": "stddev: 0.000002233253121327972",
            "extra": "mean: 39.58836001766122 usec\nrounds: 4447"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 694.3237653384336,
            "unit": "iter/sec",
            "range": "stddev: 0.000027891234404465704",
            "extra": "mean: 1.440250283688001 msec\nrounds: 564"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 699.3716034032527,
            "unit": "iter/sec",
            "range": "stddev: 0.00003111733031794674",
            "extra": "mean: 1.4298550229003322 msec\nrounds: 655"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 11269.658518876833,
            "unit": "iter/sec",
            "range": "stddev: 0.000005887440743433736",
            "extra": "mean: 88.73383326788351 usec\nrounds: 5092"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 684.8156411855919,
            "unit": "iter/sec",
            "range": "stddev: 0.000022268700735369613",
            "extra": "mean: 1.4602470210358265 msec\nrounds: 618"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 272727.385174071,
            "unit": "iter/sec",
            "range": "stddev: 4.425506955429083e-7",
            "extra": "mean: 3.666665154882557 usec\nrounds: 11907"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 688.7981102549729,
            "unit": "iter/sec",
            "range": "stddev: 0.000014766779914821819",
            "extra": "mean: 1.4518042153597508 msec\nrounds: 599"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 26.338887086030315,
            "unit": "iter/sec",
            "range": "stddev: 0.0045932355300130154",
            "extra": "mean: 37.966676296295844 msec\nrounds: 27"
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
        "date": 1710856704283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 25591.96536596192,
            "unit": "iter/sec",
            "range": "stddev: 0.000003044195805549",
            "extra": "mean: 39.07476372760452 usec\nrounds: 4389"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 701.4389679657804,
            "unit": "iter/sec",
            "range": "stddev: 0.00001680510263655822",
            "extra": "mean: 1.425640783687947 msec\nrounds: 564"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 701.0179488951337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652649149025189",
            "extra": "mean: 1.4264969985092228 msec\nrounds: 671"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 11352.065937441128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066213870580953",
            "extra": "mean: 88.08969270534472 usec\nrounds: 5031"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 686.3912568812805,
            "unit": "iter/sec",
            "range": "stddev: 0.000017562099821421662",
            "extra": "mean: 1.4568950142862351 msec\nrounds: 630"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 278466.12733656727,
            "unit": "iter/sec",
            "range": "stddev: 4.845017980424011e-7",
            "extra": "mean: 3.591101041856171 usec\nrounds: 14974"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 691.5867582032179,
            "unit": "iter/sec",
            "range": "stddev: 0.000023809588497699033",
            "extra": "mean: 1.4459501836010533 msec\nrounds: 561"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 27.37333378394977,
            "unit": "iter/sec",
            "range": "stddev: 0.0021663008980661526",
            "extra": "mean: 36.53190392857247 msec\nrounds: 28"
          }
        ]
      }
    ]
  }
}