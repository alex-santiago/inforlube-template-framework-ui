#! /bin/bash

clear
if [ ! "$1" ]; then
  echo "Missing parameter: directory path to copy files."
  exit
fi

if [ ! -d "../$1" ]; then
  echo "Informed directory path does not exist."
  exit
fi

DESTINATION="../$1"

echo "Updating template files in destination directory: $DESTINATION"
echo
echo "Checking directory structure:"
if [ ! -d "$DESTINATION/css" ]; then
  echo " - Creating directory: /css"; mkdir "$DESTINATION/css"
fi
if [ ! -d "$DESTINATION/images" ]; then
  echo " - Creating directory: /images"; mkdir "$DESTINATION/images"
fi
if [ ! -d "$DESTINATION/js" ]; then
  echo " - Creating directory: /js"; mkdir "$DESTINATION/js"
fi
if [ ! -d "$DESTINATION/js/language" ]; then
  echo " - Creating directory: /js/language"; mkdir "$DESTINATION/js/language"
fi
if [ ! -d "$DESTINATION/js/website-initialization" ]; then
  echo " - Creating directory: /js/website-initialization"; mkdir "$DESTINATION/js/website-initialization"
fi
if [ ! -d "$DESTINATION/scss" ]; then
  echo " - Creating directory: /scss"; mkdir "$DESTINATION/scss"
fi
if [ ! -d "$DESTINATION/scss/navbar" ]; then
  echo " - Creating directory: /scss/navbar"; mkdir "$DESTINATION/scss/navbar"
fi
if [ ! -d "$DESTINATION/tags" ]; then
  echo " - Creating directory: /tags"; mkdir "$DESTINATION/tags"
fi
if [ ! -d "$DESTINATION/tags/wire-frame" ]; then
  echo " - Creating directory: /tags/wire-frame"; mkdir "$DESTINATION/tags/wire-frame"
fi
if [ ! -d "$DESTINATION/vendor" ]; then
  echo " - Creating directory: /vendor"; mkdir "$DESTINATION/vendor"
fi
echo "Directory checking done."
echo
echo "Starting to copy files:"
echo "Copying Default CSS"
echo "./css" "$DESTINATION"
cp -a "./css" "$DESTINATION"
echo
echo "Copying Default images"
echo "./images" "$DESTINATION"
cp -a "./images" "$DESTINATION"
echo
echo "Copying Default js"
echo " - Language files"
echo "./js/language/dictionary.pt.br.js" "$DESTINATION/js/language/"
cp -np "./js/language/dictionary.pt.br.js" "$DESTINATION/js/language/"
echo "./js/language/language.pt.br.js" "$DESTINATION/js/language/"
cp -np "./js/language/language.pt.br.js" "$DESTINATION/js/language/"
echo "./js/language/language.en.us.js" "$DESTINATION/js/language/"
cp -np "./js/language/language.en.us.js" "$DESTINATION/js/language/"
echo "./js/language/language.es.es.js" "$DESTINATION/js/language/"
cp -np "./js/language/language.es.es.js" "$DESTINATION/js/language/"
echo " - Website initialization scripts"
echo "./js/website-initialization/ajax.js" "$DESTINATION/js/website-initialization/"
cp -a "./js/website-initialization/ajax.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/app.js" "$DESTINATION/js/website-initialization/"
cp -a "./js/website-initialization/app.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/breadcrumb.js" "$DESTINATION/js/website-initialization/"
cp -a "./js/website-initialization/breadcrumb.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/controllers.js" "$DESTINATION/js/website-initialization/"
cp -np "./js/website-initialization/controllers.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/formvalidation.js" "$DESTINATION/js/website-initialization/"
cp -a "./js/website-initialization/formvalidation.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/globals.js" "$DESTINATION/js/website-initialization/"
cp -a "./js/website-initialization/globals.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/host.js" "$DESTINATION/js/website-initialization/"
cp -np "./js/website-initialization/host.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/menu.js" "$DESTINATION/js/website-initialization/"
cp -np "./js/website-initialization/menu.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/routes.js" "$DESTINATION/js/website-initialization/"
cp -np "./js/website-initialization/routes.js" "$DESTINATION/js/website-initialization/"
echo "./js/website-initialization/session.js" "$DESTINATION/js/website-initialization/"
cp -np "./js/website-initialization/session.js" "$DESTINATION/js/website-initialization/"
echo " - Other scripts"
echo "./js/sb-admin-charts.js" "$DESTINATION/js/sb-admin-charts.js"
cp -a "./js/sb-admin-charts.js" "$DESTINATION/js/sb-admin-charts.js"
echo "./js/sb-admin-charts.min.js" "$DESTINATION/js/sb-admin-charts.min.js"
cp -a "./js/sb-admin-charts.min.js" "$DESTINATION/js/sb-admin-charts.min.js"
echo "./js/sb-admin-datatables.js" "$DESTINATION/js/sb-admin-datatables.js"
cp -a "./js/sb-admin-datatables.js" "$DESTINATION/js/sb-admin-datatables.js"
echo "./js/sb-admin-datatables.min.js" "$DESTINATION/js/sb-admin-datatables.min.js"
cp -a "./js/sb-admin-datatables.min.js" "$DESTINATION/js/sb-admin-datatables.min.js"
echo "./js/sb-admin.js" "$DESTINATION/js/sb-admin.js"
cp -a "./js/sb-admin.js" "$DESTINATION/js/sb-admin.js"
echo "./js/sb-admin.min.js" "$DESTINATION/js/sb-admin.min.js"
cp -a "./js/sb-admin.min.js" "$DESTINATION/js/sb-admin.min.js"
echo
echo "Copying Default scss"
echo "./scss" "$DESTINATION"
cp -a "./scss" "$DESTINATION"
echo
echo "Copying Default tags wire-frames"
echo "./tags/wire-frame" "$DESTINATION/tags"
cp -a "./tags/wire-frame" "$DESTINATION/tags"
echo
echo "Copying Default vendor scripts"
echo "./vendor" "$DESTINATION"
cp -a "./vendor" "$DESTINATION"
echo
echo "Copying Default index file"
echo "./index.html" "$DESTINATION"
cp -np "./index.html" "$DESTINATION"
echo "Site update finished"
