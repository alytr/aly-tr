int nombre_de_mots
{
int i= 0 , mots = 0;
while(i< phrase.size())
{
    while(phrase[i])
    i++;
    mots++;
    while(i<phrase.size() && phrase[i] != '')
    i++;
}
return mots;
}
