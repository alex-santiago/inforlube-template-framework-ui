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
if [ ! -d "$DESTINATION/js/framework/configuration" ]; then
  echo " - Creating directory: /js/framework/configuration"; mkdir "$DESTINATION/js/framework/configuration"
fi
if [ ! -d "$DESTINATION/js/framework/language" ]; then
  echo " - Creating directory: /js/framework/language"; mkdir "$DESTINATION/js/framework/language"
fi
if [ ! -d "$DESTINATION/plugins" ]; then
  echo " - Creating directory: /plugins"; mkdir "$DESTINATION/plugins"
fi
# if [ ! -d "$DESTINATION/js/website-initialization" ]; then
#   echo " - Creating directory: /js/website-initialization"; mkdir "$DESTINATION/js/website-initialization"
# fi
if [ ! -d "$DESTINATION/scss" ]; then
  echo " - Creating directory: /scss"; mkdir "$DESTINATION/scss"
fi
if [ ! -d "$DESTINATION/scss/navbar" ]; then
  echo " - Creating directory: /scss/navbar"; mkdir "$DESTINATION/scss/navbar"
fi
if [ ! -d "$DESTINATION/support" ]; then
  echo " - Creating directory: /support"; mkdir "$DESTINATION/support"
fi
if [ ! -d "$DESTINATION/tags" ]; then
  echo " - Creating directory: /tags"; mkdir "$DESTINATION/tags"
fi
if [ ! -d "$DESTINATION/tags/wire-frame" ]; then
  echo " - Creating directory: /tags/wire-frame"; mkdir "$DESTINATION/tags/wire-frame"
fi
echo "Directory checking done."
echo
echo "Starting to copy files:"
echo "Copying Default CSS"
echo "./css/styles.css" "$DESTINATION/css/"
cp -a "./css/styles.css" "$DESTINATION/css/"
echo "./css/custom.css" "$DESTINATION/css/"
cp -np "./css/custom.css" "$DESTINATION/css/"
echo
echo "Copying Default images"
echo "./images" "$DESTINATION"
cp -a "./images" "$DESTINATION"
echo
echo "Copying Default js"
echo " - Configuration files"
echo "./js/framework/configuration/controllers.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/controllers.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/host.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/host.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/language-config.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/language-config.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/menu-items.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/menu-items.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/routes.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/routes.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/session-config.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/session-config.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/tables.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/tables.js" "$DESTINATION/js/framework/configuration/"
echo "./js/framework/configuration/test-variables.js" "$DESTINATION/js/framework/configuration/"
cp -np "./js/framework/configuration/test-variables.js" "$DESTINATION/js/framework/configuration/"
echo " - Language files"
echo "./js/framework/language/dictionary.pt.br.js" "$DESTINATION/js/framework/language/"
cp -a "./js/framework/language/dictionary.pt.br.js" "$DESTINATION/js/framework/language/"
echo "./js/framework/language/language.pt.br.js" "$DESTINATION/js/framework/language/"
cp -a "./js/framework/language/language.pt.br.js" "$DESTINATION/js/framework/language/"
echo "./js/framework/language/language.en.us.js" "$DESTINATION/js/framework/language/"
cp -a "./js/framework/language/language.en.us.js" "$DESTINATION/js/framework/language/"
echo "./js/framework/language/language.es.es.js" "$DESTINATION/js/framework/language/"
cp -a "./js/framework/language/language.es.es.js" "$DESTINATION/js/framework/language/"
echo " - Framework base scripts"
echo "./js/framework/ajax.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/ajax.js" "$DESTINATION/js/framework/"
echo "./js/framework/app.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/app.js" "$DESTINATION/js/framework/"
echo "./js/framework/breadcrumb.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/breadcrumb.js" "$DESTINATION/js/framework/"
echo "./js/framework/charts.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/charts.js" "$DESTINATION/js/framework/"
echo "./js/framework/formvalidation.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/formvalidation.js" "$DESTINATION/js/framework/"
echo "./js/framework/globals.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/globals.js" "$DESTINATION/js/framework/"
echo "./js/framework/menu.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/menu.js" "$DESTINATION/js/framework/"
echo "./js/framework/messages.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/messages.js" "$DESTINATION/js/framework/"
echo "./js/framework/modal.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/modal.js" "$DESTINATION/js/framework/"
echo "./js/framework/pagination.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/pagination.js" "$DESTINATION/js/framework/"
echo "./js/framework/session.js" "$DESTINATION/js/framework/"
cp -a "./js/framework/session.js" "$DESTINATION/js/framework/"
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
echo "Copying Default plugins scripts"
echo "./plugins" "$DESTINATION"
cp -a "./plugins" "$DESTINATION"
echo
echo "Copying Default scss"
echo "./scss" "$DESTINATION"
cp -a "./scss" "$DESTINATION"
echo
echo "Copying Default tags wire-frames"
echo "./tags/wire-frame" "$DESTINATION/tags"
cp -a "./tags/wire-frame" "$DESTINATION/tags"
echo
echo "Copying Default index file"
echo "./index.html" "$DESTINATION"
cp -np "./index.html" "$DESTINATION"
echo "Site update finished"
