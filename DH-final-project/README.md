'Title': The title of the song. Determined by extracting text with the 'entry-title' class from each doolset lyrics song page. <br/>
<br/>
'Album': The album the song first appeared in, or its designation as a Soundcloud or miscellaneous song. Determined by extracting text with the 'entry-title' class from each doolset lyrics album page.<br/>
<br/>
'Date': The date the album the song appeared in was released, if relevant, or the date it was released on Soundcloud or YouTube.<br/>
<br/>
'Track Number': A numerical label for songs in each album, starting at 0. Primarily used for positioning visualizations of songs in D3.js, does not reflect actual track order. <br/>
<br/>
'Unique Word Count': Number of unique words in the bag of words representation of the complete translated lyrics of the song. Does not include stopwords and punctuation.<br/>
<br/>
'Notes to Lyrics Ratio Original': Length of the string of all notes extracted for a song divided by the length of the string of all lyrics extracted for a song. Does not use the bag of words representation so it contains all words scraped from the site.<br/>
<br/>
'Percent English Unique': Number of unique words in the bag of words representation of original English lyrics in a song divided by the number of unique words in the bag of words representation of the complete translated lyrics in a song. Does not include stopwords and punctuation.<br/>
<br/>
'Percent English Original': Length of the string of the extracted text of original English lyrics in a song divided by the length of the string of the extracted text of the complete translated lyrics in a song. Does not use the bag of words representation so it contains all words scraped from the site.
'Percent English BOW': Number of words in the bag of words representation of original English lyrics in a song divided by the number of words in the bag of words representation of the complete translated lyrics in a song. Does not include stopwords and punctuation.<br/>
<br/>
'Link References': A list of all the doolset lyrics song translation pages linked to from a given song's translation page. The URLs are reduced to a hyphenated version of the song's name for easy matching.<br/>
<br/>
'Reference URL': A reduced version of the song's translation page on doolset lyrics that contains only a hyphenated version of the song's name. Used for easily matching URLs.<br/>
<br/>
'Most Common Translated': The five words with the highest frequency in the lyrics translated from Korean extracted from doolset lyrics. Determined by calling Pandas' value_counts function on the bag of words representation for the text and storing the first five words as a list. It does not include the actual frequencies of the words or distinguish between when words have the same frequency.<br/>
<br/>
'Most Common English': The five words with the highest frequency in the lyrics originally in English extracted from doolset lyrics. Determined by calling Pandas' value_counts function on the bag of words representation for the text and storing the first five words as a list. It does not include the actual frequencies of the words or distinguish between when words have the same frequency.<br/>
<br/>
'BOW_English Lyrics Only': A bag of words representation of a song's lyrics that are originally in English, as extracted from doolset lyrics. A list of words that appear in the cleaned version of the text with punctuation and stopwords (as determined by NLTK's English stopwords corpus) removed. NLTK's pos_tag function was used to estimate the part of speech for each word, which was subsequently used to lemmatize the word to its root form using NLTK's WordNetLemmatizer. Words detected as nouns were lemmatized as nouns, and all others were lemmatized as verbs.<br/>
<br/>
'BOW_Translated Korean Lyrics Only': A bag of words representation of a song's lyrics that were translated from Korean, as extracted from doolset lyrics. A list of words that appear in the cleaned version of the text with punctuation and stopwords (as determined by NLTK's English stopwords corpus) removed. NLTK's pos_tag function was used to estimate the part of speech for each word, which was subsequently used to lemmatize the word to its root form using NLTK's WordNetLemmatizer. Words detected as nouns were lemmatized as nouns, and all others were lemmatized as verbs.<br/>
<br/>
'BOW_Notes': A bag of words representation of a song's translation notes, as extracted from doolset lyrics. A list of words that appear in the cleaned version of the text with punctuation and stopwords (as determined by NLTK's English stopwords corpus) removed. NLTK's pos_tag function was used to estimate the part of speech for each word, which was subsequently used to lemmatize the word to its root form using NLTK's WordNetLemmatizer. Words detected as nouns were lemmatized as nouns, and all others were lemmatized as verbs.<br/>
<br/>
'BOW_Complete Translated Lyrics': A bag of words representation of a song's complete translated lyrics, as extracted from doolset lyrics. A list of words that appear in the cleaned version of the text with punctuation and stopwords (as determined by NLTK's English stopwords corpus) removed. NLTK's pos_tag function was used to estimate the part of speech for each word, which was subsequently used to lemmatize the word to its root form using NLTK's WordNetLemmatizer. Words detected as nouns were lemmatized as nouns, and all others were lemmatized as verbs.<br/>
<br/>
'Complete Translated Lyrics': The text of a song's complete translated lyrics, regardless of whether words were originally in English or Korean, as extracted from doolset lyrics. The complete translated lyrics were extracted by finding all of the spans colored red on a page, the mostly consistent rule the translator uses to denote English lines. Text extracted as notes was removed from this extracted text in an attempt to correct cases where a note was included wihtin the red-colored span of text for lyrics. All words in the text were converted to lowercase forms and spacing characters (like '\n') were removed.<br/>
<br/>
'Notes': The text of a song's in-line translation notes, not notes on the song in general that aren't associated with a specific lyric, as extracted from doolset lyrics. The notes were extracted by finding all of the spans colored green on a page, the mostly consistent rule the translator uses to denote in-line notes. All words in the text were converted to lowercase forms and spacing characters (like '\n') were removed.<br/>
<br/>
'Translated Korean Lyrics Only': The text of a song's lyrics translated from Korean, as extracted from doolset lyrics. The lyrics translated from Korean were extracted by finding all of the spans colored red on a page, the mostly consistent rule the translator uses to denote English lines. Text extracted as notes and lyrics originally in English were removed from this extracted text. All words in the text were converted to lowercase forms and spacing characters (like '\n') were removed.<br/>
<br/>
'English Lyrics Only': The text of a song's lyrics that were originally in English, as extracted from doolset lyrics. The complete translated lyrics were extracted by finding all of the emphasized text on a page, the mostly consistent rule the translator uses to denote lines originally in English. All words in the text were converted to lowercase forms and spacing characters (like '\n') were removed.<br/>
<br/>
'Internal Links': A list of links to other song translations on doolset lyrics contained in the given song's page. These internal links were extracted by finding all links in the main text of a page and then filtering out those that did not fit the format for song translation pages. <br/>
<br/>
'URL': The original URL used to scrape content for a song.<br/>
<br/>
'Soup_y': The entire HTML contents of the doolset lyrics page for a song.<br/>
<br/>
'Youtube Views': The number of views on the YouTube video embedded in the doolset lyrics translation page for a song, as scraped from the YouTube page for that video. The view count was extracted using the 'interactionCount' meta tag on the page.<br/>
<br/>
'Youtube Video': The URL of the YouTube video embedded in the doolset lyrics translation page for a song, including official music videos and performances of a song. Most songs had a working embedded video, but some did not contain a video or contained a video that was no longer publicly available at the time of scraping.
