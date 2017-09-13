//财经要闻、时事要闻标签切换
function SwitchNewsTag(id,num,count)
{
	ClearTagClass(id,count);
	document.getElementById("tagname_" + id + num).className = "tagf";
	document.getElementById(id + num).style.display = "";
}
function ClearTagClass(id,count)
{
	for(i=1;i<=count;i++)
	{
		document.getElementById("tagname_" + id + i).className = "tagn";
		document.getElementById(id + i).style.display = "none";
	}
}