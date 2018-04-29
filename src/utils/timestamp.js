const UNIX_JAVA_TIMESTAMP_FACTOR = 1000;

export const javaToUnixTimestamp = (javaTimestamp) => javaTimestamp * UNIX_JAVA_TIMESTAMP_FACTOR;

export const unixToJavaTimestamp = (unixTimestamp) => unixTimestamp / UNIX_JAVA_TIMESTAMP_FACTOR;
