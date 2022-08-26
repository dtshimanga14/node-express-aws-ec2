#!/bin/sh
CODEDEPLOY_BIN="/opt/codedeploy-agent/bin/codedeploy-agent"
$CODEDEPLOY_BIN stop
sudo yum erase codedeploy-agent -y

sudo yum install -y update
sudo yum install -y ruby
sudo yum install -y wget
cd /home/ec2-user/
wget https://bucket-name.s3.region-identifier.amazonaws.com/latest/install
