# WSL

## 注销

wsl --unregister Ubuntu

## 安装

wsl --install

## 配置

**桥接网络**

hyperV创建虚拟交换机WSL

选择虚拟交换机的网卡为联网的物理网卡，应用

在%USERPROFILE%目录下，创建.wslconfig文件

[wsl2]
networkingMode=bridged # 桥接模式
vmSwitch=WSL # 虚拟交换机
ipv6=false # 不启用 IPv6
memory=30GB # 物理内存
swap=160GB # 虚拟内存

然后重启wsl

wsl --shutdown && wsl

**代理**

vi ~/.bash_profile

添加：
export http_proxy=http://192.168.31.187:7890
export https_proxy=http://192.168.31.187:7890

source ~/.bash_profile

curl https://www.google.com


## 安装rust

curl https://sh.rustup.rs -sSf | sh

source ~/.bashrc

### 安装GCC

sudo apt update
sudo apt install build-essential cmake

gcc --version
cmake --version

### 网络工具

sudo apt install net-tools
netstat -tuln | grep 8546

### 安装anaconda

sh ./Anaconda3-2023.07-1-Linux-x86_64.sh


vi ~/.bashrc

export PATH=$PATH:/home/zhr/anaconda3/bin

source ~/.bashrc
