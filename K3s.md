# k3s notes

## Restart k3s
```
systemctl restart k3s
```

## Automatic restart on boot

Put .yaml files into 
```
/var/lib/rancher/k3s/server/manifests
```

## Kubectl from remote host (on windows)

Install kubectl (scoop)

Copy ~/.kube/config from server
```
/var/lib/rancher/k3s/agent/kubeconfig.yaml
=> 
~/.kube/config
```

Edit ~/.kube/config with your server ip
```
> server: https://[server-ip]:6443
```