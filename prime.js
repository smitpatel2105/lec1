document.write("hi");

function prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
		{
		console.log("not prime");
        return false;
		}
    }
	console.log("prime");
    return true;  
  }
}

console.log(prime(37));