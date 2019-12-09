< !DOCTYPE html >
< !--saved from url = (0024)https://hackertyper.net/ -->
<html lang="en"><!--
*(c) Copyright 2011 Simone Masiero. Some Rights Reserved.
*This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
--><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <title>Hacker Typer</title>
        <link href="./Hacker Typer_files/style.css" rel="stylesheet" type="text/css">
            <script src="./Hacker Typer_files/jquery-3.3.1.min.js.download" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
        <body>
            <div id="console">struct&nbsp;group_info&nbsp;init_groups&nbsp;=&nbsp;{& nbsp;.usage&nbsp;=&nbsp;ATOMIC_INIT(2)&nbsp;};<br><br>struct&nbsp;group_info&nbsp;*groups_alloc(int&nbsp;gidsetsize){<br><br>&nbsp;&nbsp;&nbsp;&nbsp;struct&nbsp;group_info&nbsp;*group_info;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;nblocks;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;int&nbsp;i;<br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;nblocks&nbsp;=&nbsp;(gidsetsize&nbsp;+&nbsp;NGROUPS_PER_BLOCK&nbsp;-&nbsp;1)&nbsp;/&nbsp;NGROUPS_PER_BLOCK;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;/*&nbsp;Make&nbsp;sure&nbsp;we&nbsp;always&nbsp;allocate&nbsp;at&nbsp;least&nbsp;one&nbsp;indirect&nbsp;block&nbsp;pointer&nbsp;*/<br><br>&nbsp;&nbsp;&nbsp;&nbsp;nblocks&nbsp;=&nbsp;nblocks&nbsp;?&nbsp;:&nbsp;1;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;group_info&nbsp;=&nbsp;kmalloc(sizeof(*group_info)&nbsp;+&nbsp;nblocks*sizeof(gid_t&nbsp;*),&nbsp;GFP_USER);<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(!group_info)<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;NULL;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;group_info-&gt;ngroups&nbsp;=&nbsp;gidsetsize;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;group_info-&gt;nblocks&nbsp;=&nbsp;nblocks;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;atomic_set(&amp;group_info-&gt;usage,&nbsp;1);<br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(gidsetsize&nbsp;&lt;=&nbsp;NGROUPS_SMALL</div>


                <script src="./Hacker Typer_files/script.js.download" type="text/javascript"></script>
                <script type="text/javascript">
                    Typer.speed = 4;
                    Typer.file = 'kernel.txt';
                    Typer.init();
</script>

</body></html>