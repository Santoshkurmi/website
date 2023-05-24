import{b as n,v as o,g as l,t as s}from"./entry-client-bdbba50c.js";import{M as r}from"./index-15aa664c.js";const a=s('<iframe width="560" height="315" src="https://www.youtube.com/embed/3nPmJmD8FX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',2);function i(t){const e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",img:"img"},r(),t.components);return[n(e.h1,{children:"Pre-installation"}),`
`,n(e.p,{children:"Note: Metis Linux installation images do not support Secure Boot. You will need to disable Secure Boot to boot the installation medium."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{get children(){return["Download Metis Linux from our ",n(e.a,{href:"https://objects.githubusercontent.com/github-production-release-asset-2e65be/512371970/0cf75ce8-3b1c-4274-886b-e9c2a67a7dce?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230409T143609Z&X-Amz-Expires=300&X-Amz-Signature=65c337df2d16fe942dafd4b24d8023ebb91a5190e2a0f4471997b8c012f659f2&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=512371970&response-content-disposition=attachment%3B%20filename%3Dmetis-base-runit-20220717-v1.1.1-x86_64.iso&response-content-type=application%2Foctet-stream",children:"Download Page"})]}}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Flash the Metis OS image in a usb stick. Plug it in your machine and live boot from the USB stick."}),`
`]}}),`
`]}}),`
`,n(e.h1,{children:"Preparation For Installation"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Verify the boot mode To verify the boot mode uefi or legacy, list the efivars directory:"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return[" ",n(e.span,{className:"hljs-built_in",children:"ls"}),` /sys/firmware/efi/efivars
`]}})}}),`
`,n(e.p,{children:"If the command shows the directory without error, then the system is booted in UEFI mode. If the directory does not exist, the system may be booted in BIOS (or CSM) mode. If the system did not boot in the mode you desired, refer to your motherboard's manual."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Note1: For UEFI Systems, you must create a boot partition of at least 300 MBs (512 MBs recommended) for grub installation during the installation process. Skip for legacy systems."}),`
`]}}),`
`,n(e.li,{get children(){return[`
`,n(e.p,{children:"Note2: Legacy installation only supports limited filesystem types like ext4, xfs. It doesnot support btrfs file system."}),`
`]}}),`
`]}}),`
`,n(e.h1,{children:"Connect to the internet"}),`
`,n(e.p,{children:"To set up a network connection in the live environment, go through the following steps:"}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",get children(){return["ip ",n(e.span,{className:"hljs-built_in",children:"link"}),` 
`]}})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"For wireless and WWAN, make sure the card is not blocked with rfkill."}),`
`,n(e.li,{get children(){return["Connect to the network:",`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Ethernet—plug in the cable."}),`
`,n(e.li,{children:`You can either use nmcli or nmtui to connect to the wifi networks.
The connection may be verified with ping:`}),`
`]}}),`
`]}}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`ping -c 3 metislinux.org
`})}}),`
`,n(e.h1,{children:"Installation Process Using metis-sideload"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Execute the command metis-sideload and follow the instructions:"}),`
`]}}),`
`,n(e.pre,{get children(){return n(e.code,{className:"hljs language-bash",children:`metis-sideload 
`})}}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{children:"Login after successful installation"}),`
`,n(e.li,{get children(){return[`After completing installation, select xinitrc in the login screen and then enter your username and password to login.
`,n(e.img,{src:"https://metislinux.org/assets/images/pages/installation-guide/metis-login-screen.png",alt:"login_screen"})]}}),`
`]}}),`
`,n(e.h1,{children:"Here is a installation tutorial video made by one of the metis linux user!"}),`
`,l(a)]}function h(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n(e,o(t,{get children(){return n(i,t)}})):i(t)}export{h as default};
