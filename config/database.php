<?php

use Symfony\Component\Yaml\Yaml;
use Phpkain\File\File;

$params = Yaml::parseFile(File::root().File::ds().'.env');

return [
  'host' => $params['MYSQL']['host'],
  'port' => $params['MYSQL']['port'],
  'database' => $params['MYSQL']['database'],
  'username' => $params['MYSQL']['username'],
  'password' => $params['MYSQL']['password'],
  'charset' => $params['MYSQL']['charset'],
  'collation' => $params['MYSQL']['collation']
];
