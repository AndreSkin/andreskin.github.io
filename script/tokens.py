import numpy as np

# Function to reconstruct the string from the tokens
def reconstruct_string(tokens, target_Str):
    indexes = []
    str = ""
    #Iterate through the string and find the indexes of the tokens
    for char in target_Str:
        str += char
        if str in tokens:
            indexes.append(np.where(tokens == str)[0][0])
            str = ""
    return indexes


objective = 'your_string_here'
#Get uniuqe tokens and shuffle them
tokenlist = list(set(objective))
tokenlist = np.array(tokenlist)
np.random.shuffle(tokenlist)
print(tokenlist)

#Reconstruct the string by finding the indexes of the tokens
result = reconstruct_string(tokenlist, objective)

print(result)

for elem in result:
    #Check correctness
    print(tokenlist[elem],end="")



