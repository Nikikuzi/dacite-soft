window.BENCHMARK_DATA = {
  "lastUpdate": 1710853723089,
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
      }
    ]
  }
}