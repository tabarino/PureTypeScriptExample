let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeEndsWithC = (message as string).endsWith('c');
