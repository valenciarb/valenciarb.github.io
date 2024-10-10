---
layout: ../../../layouts/MeetingLayout.astro
date: 2013-12-17 19:00
title: "Vagrant + Chef"
---

[Vagrant](http://www.vagrantup.com) y [Chef](https://wiki.opscode.com/display/chef/Home) son la combinación perfecta para conseguir un sistema de virtualización con provisionamiento automatizado.

En el encuentro de hoy, [@josacar](http://twitter.com/josacar) nos ofrecerá una visión práctica de ambas herramientas, empezando con una configuración básica y aplicando un provisionador sencillo tipo shell script, para acabar después con un provisionador más potente utilizando Chef.

Ya con Chef empezaremos obteniendo manualmente todas las dependencias y alojándolas localmente, para pasar luego a un sistema de gestion de dependencias tipo Bundler, donde éstas se declaran y se resuelven automáticamente.

Al final de la charla habremos comprobado como podemos obtener el mismo resultado, con una misma receta de provisionamiento, a partir de dos imágenes de sistemas diferentes ([Debian](https://dl.dropboxusercontent.com/u/197673519/debian-7.2.0.box) y [CentOS](http://puppet-vagrant-boxes.puppetlabs.com/centos-64-x64-vbox4210-nocm.box)) y veremos como empaquetar el resultado para su posterior distribución.

La charla está planteada como un taller interactivo, así que no olvidéis vuestros portátiles y traer descargadas de casa las imágenes que utilizaremos en la charla.

[Github repo »](https://github.com/josacar/valenciarb-workshop)
