window.BENCHMARK_DATA = {
  "lastUpdate": 1710857589172,
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
        "date": 1710853722530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 30717.951720177374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017842853686332845",
            "extra": "mean: 32.554253913458055 usec\nrounds: 4344"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 828.9453997571838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000170378291737545",
            "extra": "mean: 1.2063520713100304 msec\nrounds: 603"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 829.3902392574482,
            "unit": "iter/sec",
            "range": "stddev: 0.000014970690783049947",
            "extra": "mean: 1.2057050501285118 msec\nrounds: 778"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 13055.6598626436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030364586812085357",
            "extra": "mean: 76.5951327256402 usec\nrounds: 5485"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 791.6606450396868,
            "unit": "iter/sec",
            "range": "stddev: 0.00009214084445448813",
            "extra": "mean: 1.2631675027244396 msec\nrounds: 734"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 317161.3940523175,
            "unit": "iter/sec",
            "range": "stddev: 3.8229349068148086e-7",
            "extra": "mean: 3.152968863023236 usec\nrounds: 15480"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 830.3765820106814,
            "unit": "iter/sec",
            "range": "stddev: 0.000017079019012668427",
            "extra": "mean: 1.2042728825258906 msec\nrounds: 681"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 32.41682970074971,
            "unit": "iter/sec",
            "range": "stddev: 0.0026240255605168403",
            "extra": "mean: 30.84817390322635 msec\nrounds: 31"
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
        "date": 1710856706065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 31240.32771706704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018096224912011142",
            "extra": "mean: 32.00990748421905 usec\nrounds: 4583"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 829.3736258012177,
            "unit": "iter/sec",
            "range": "stddev: 0.000017696707812726384",
            "extra": "mean: 1.2057292020034376 msec\nrounds: 599"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 830.6166589292842,
            "unit": "iter/sec",
            "range": "stddev: 0.00001687163952920722",
            "extra": "mean: 1.203924806045982 msec\nrounds: 794"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 13072.336352918737,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040211224430685204",
            "extra": "mean: 76.49741966566857 usec\nrounds: 5502"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 803.3895582143014,
            "unit": "iter/sec",
            "range": "stddev: 0.00001647377089292538",
            "extra": "mean: 1.2447261602736108 msec\nrounds: 730"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 302381.9894605888,
            "unit": "iter/sec",
            "range": "stddev: 4.149016380701952e-7",
            "extra": "mean: 3.3070752718568768 usec\nrounds: 16912"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 831.05460616156,
            "unit": "iter/sec",
            "range": "stddev: 0.000013873769664484875",
            "extra": "mean: 1.2032903645390498 msec\nrounds: 705"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 32.600271538254916,
            "unit": "iter/sec",
            "range": "stddev: 0.0021373858543104834",
            "extra": "mean: 30.674591125001704 msec\nrounds: 32"
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
          "id": "bc87acc244b7aa9ff134d443043d7a17ffaa21b3",
          "message": "removed coverage from from README.md",
          "timestamp": "2024-03-19T18:12:26+04:00",
          "tree_id": "4200caac93f7c80d0b07f52b42b11b939ae6413a",
          "url": "https://github.com/Nikikuzi/dacite-soft/commit/bc87acc244b7aa9ff134d443043d7a17ffaa21b3"
        },
        "date": 1710857588806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 29327.561581878217,
            "unit": "iter/sec",
            "range": "stddev: 0.000005109108236852671",
            "extra": "mean: 34.09761828333897 usec\nrounds: 4299"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 828.6785302156519,
            "unit": "iter/sec",
            "range": "stddev: 0.000016424939967082675",
            "extra": "mean: 1.2067405677081606 msec\nrounds: 576"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 826.5442152462629,
            "unit": "iter/sec",
            "range": "stddev: 0.000034109618470259254",
            "extra": "mean: 1.2098566314471844 msec\nrounds: 795"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 12932.112739139633,
            "unit": "iter/sec",
            "range": "stddev: 0.000003182568390644031",
            "extra": "mean: 77.32688541861023 usec\nrounds: 5507"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 792.3096120596362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000664449702721115",
            "extra": "mean: 1.2621328641974512 msec\nrounds: 729"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 308537.48056554666,
            "unit": "iter/sec",
            "range": "stddev: 4.6873222611950456e-7",
            "extra": "mean: 3.241097315525518 usec\nrounds: 16390"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 807.3266211951333,
            "unit": "iter/sec",
            "range": "stddev: 0.00013628468719768761",
            "extra": "mean: 1.238656045454863 msec\nrounds: 682"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 32.04996833643522,
            "unit": "iter/sec",
            "range": "stddev: 0.002024606351290329",
            "extra": "mean: 31.201278874998906 msec\nrounds: 32"
          }
        ]
      }
    ]
  }
}