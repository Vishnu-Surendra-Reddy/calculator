var esc="";
var prev=null;
var check="";
var count=0;
function fun(val){
    var l=document.getElementById("data");
    if(prev==null)
    {
        l.value=l.value+val;
        l.style.fontSize="50px";
        esc=esc+val;
    }
    else
    {
        if((val=='+' || val=='-' || val=='*' || val=='%' || val=='/'|| val=='=') && prev!=null)
        {
            if(prev=="√")
            {
                if(esc.length-1==count)
                {
                    l.value=Math.sqrt(check)+val;
                    esc=l.value;

                }
                else{
                      l.value=esc.substring(0,esc.length-count-1);
                      if(val!='=')
                      {
                        l.value=l.value+Math.sqrt(check)+val;
                      }
                      else
                      {
                        l.value=l.value+Math.sqrt(check)
                      }
                      esc=l.value;
                    }
            }
            else if(prev=='∛')
                {
                    if(esc.length-1==count)
                    {
                        l.value=Math.cbrt(check)+val;
                        esc=l.value;
    
                    }
                    else{
                        l.value=esc.substring(0,esc.length-count-1);
                        if(val!='=')
                        {
                          l.value=l.value+Math.cbrt(check)+val;
                        }
                        else
                        {
                          l.value=l.value+Math.cbrt(check);
                        }
                        esc=l.value;
                        }
                }
            else if(prev=='x²')
                    {
                        if(esc.length-1==count)
                        {
                            l.value=Math.cbrt(check)+val;
                            esc=l.value;
        
                        }
                        else{
                            l.value=esc.substring(0,esc.length-count-2);
                            if(val!='=')
                            {
                              l.value=l.value+check*check+val;
                            }
                            else
                            {
                              l.value=l.value+check*check;
                            }
                            esc=l.value;
                            }
                    }
                    else if(prev=='x³')
                        {
                            if(esc.length-1==count)
                            {
                                l.value=check*check*check+val;
                                esc=l.value;
            
                            }
                            else{
                                l.value=esc.substring(0,esc.length-count-2);
                                if(val!='=')
                                {
                                  l.value=l.value+check*check*check+val;
                                }
                                else
                                {
                                  l.value=l.value+check*check*check;
                                }
                                esc=l.value;
                                }
                        }
                prev=null;
                count=0;
                check="";
                l.style.fontSize="50px";
                if(val=='=')
                {
                    solve();

                }

        }
        else
        {
            check=check+val;
            l.value=l.value+val;
            l.style.fontSize="50px";
            esc=esc+val;
            count++;
        }

    }
    
    
}
function solve()
{
    if(prev==null)
    {
         let res=document.getElementById("data");
         res.value=eval(res.value);
         res.style.fontSize="50px";
         esc=res.value;
    }
    else
    {
        fun('=');
    }

}
function escape()
{
    var len=esc.length;
    var pk=document.getElementById("data");
    pk.value=esc.substring(0,len-1);
    esc=pk.value;
    pk.style.fontSize="50px";
}
function cancel(){
    window.location="index.html";
}
function toggle(){
    var a=document.getElementById('data');
    a.value=(parseFloat(a.value)*-1).toString();
}

function mathematical(vale)
{
    var k=document.getElementById("data");
    if(vale=="√"){
        k.value=k.value+vale;
        esc=esc+vale;
        prev="√";
    }
    else if(vale=='∛'){
        k.value=k.value+vale;
        esc=esc+vale;
        prev='∛';
    }
    else if(vale=='x²')
    {
        k.value=k.value+vale;
        esc=esc+vale;
        prev='x²';
    }
    else if(vale=='x³')
    {
            k.value=k.value+vale;
            esc=esc+vale;
            prev='x³';
    }
    k.style.fontSize="50px";
}
