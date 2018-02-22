STEPS:

1. Go to project's root directory.
1. Replace `pca_metrics.json` file with your own pca_metrics json file
1. Grep all values for your dimension type from your pca_metrics json file.
Example:
```
ishakirov@dev-03:~$ less /net/mapr5-nfs/mapr/mapr5/opt/lci/ishakirov/campaign=22191/pca_metrics/2017-11-11/20171214_C-22191_NOV11_ilgam/summary.json | grep 'publisher:'
```
1. Copy-paste this info to the `dim_values.txt` file (remove redundant symbols):
1. In `dim_values.txt` file: Comment out with `//` all dim values which have calculated PCA data in db.
1. Run `main.js` file to calculate aggregated parameters for `_OTHER_LCI_`:

```
➜  nodejs-package-clone git:(develop) ✗ npm run babel-node src/_helpfull_stuff/get_specific_value_from_json/main.js

Number of aggregated dim values: 292.

CALCULATION:
impressions: 794732
post_exposure_visits: 928
total_visits_projected: 14167
exposed_visits: 1293
```
