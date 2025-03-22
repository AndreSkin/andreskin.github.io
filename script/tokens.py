import numpy as np

def reconstruct_string(tokens, target_str):
    indexes = []
    start_index = 0
    
    while start_index < len(target_str):
        found = False
        for length in range(1, len(target_str) - start_index + 1):
            substring = target_str[start_index:start_index + length]
            if substring in tokens:
                indexes.append(np.where(tokens == substring)[0][0])
                start_index += length
                found = True
                break
        if not found:
            start_index += 1
    
    return indexes

objective = 'MY_EMAIL'
tokenlist = np.array(list(set(objective)))  # Unique tokens
np.random.shuffle(tokenlist)

print("Shuffled tokens:", tokenlist)

result = reconstruct_string(tokenlist, objective)
print("Indexes:", [int(i) for i in result])  # Converting np.int64 to int

reconstructed_string = ''.join(tokenlist[i] for i in result)
print("Reconstructed string:", reconstructed_string)
