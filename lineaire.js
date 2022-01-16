function sum(arr1,arr2){
    var sum=0 ;
for(let i=0;i<arr1.length;i++){
  
    for(let j=0;j<arr2.length;j++){
    
        if(arr1[i] == arr2[j]){
            sum += arr1[i];
        }
    }
    
}
console.log(sum);
}



// fonction de calcul
// somme de deux arrays
int findSum(int A[], int B[], int n)
{  
    
    for(int i=0;i<n;i++)
    {
        if(hash.find(A[i])==hash.end())
        {
            hash.insert(make_pair(A[i],1));
        }
        else
        {
            hash[A[i]]++;
        }
    }
     
    for(int i=0;i<n;i++)
    {
        if(hash.find(B[i])==hash.end())
        {
            hash.insert(make_pair(B[i],1));
        }
        else
        {
            hash[B[i]]++;
        }
    }
 
    // somme
    int sum = 0;
    for(auto itr = hash.begin(); itr!=hash.end(); itr++)
    {
        if((itr->second)==2)
        {
            sum += (itr->first)*2;
        }
    }
     
    return sum;
}





function sum(arr3,arr4){
    var sum=0 ;
for(let i=0;i<arr1.length;i++){
  
    for(let j=0;j<arr2.length;j++){
    
        if(arr3[i] == arr4[j]){
            sum += arr3[i];
        }
    }
    
}
console.log(sum);
}


// fonction de calcul
// somme de deux arrays
int findSum(int C[], int D[], int n)
{  
    
    for(int i=0;i<n;i++)
    {
        if(hash.find(C[i])==hash.end())
        {
            hash.insert(make_pair(C[i],1));
        }
        else
        {
            hash[C[i]]++;
        }
    }
     
    for(int i=0;i<n;i++)
    {
        if(hash.find(D[i])==hash.end())
        {
            hash.insert(make_pair(D[i],1));
        }
        else
        {
            hash[D[i]]++;
        }
    }
 
    // somme
    int sum = 0;
    for(auto itr = hash.begin(); itr!=hash.end(); itr++)
    {
        if((itr->second)==2)
        {
            sum += (itr->first)*2;
        }
    }
     
    return sum;
}
