---
layout: default
---
<center>
<hr width="100%" size="3">
<div class="container">
        <a href="https://ellisjalia.com"><img src="/assets/icons/menu.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/essays"><img src="/assets/icons/quill.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/art"><img src="/assets/icons/paint-palette.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/newsletter"><img src="/assets/icons/newsletter.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
        <a href="https://ellisjalia.com/about"><img src="/assets/icons/unknown.png" style="width:43px;height:43px;justify-content:center;display:inline-block;border:1px;margin: 0px 8px;padding:2px;"/></a>
 </div>
  <hr width="100%" size="3">
  </center>

<p style="font-size:1.7em; margin-bottom:0"><strong>Artificial General Intelligence</strong></p>
<p style="font-size:0.9em;">Friday, 13 December 2024</p>

<center><img src="/assets/images/agi.png"></center>
<center><p style="font-size:0.9em; color: grey">A depiction of artificial general intelligence created using OpenAI's ChatGPT. Each node represents an artificial neuron, while the red spark at the centre of the head symbolizes the emergent property of phenomenal consciousness.</p></center>

A.G.I––Artificial General Intelligence. If you had asked someone ten years ago when humanity would achieve artificial general intelligence, they might have said within a century. The development of generative AI models like OpenAI's ChatGPT has shifted the conversation. Artificial general intelligence could now become a reality much sooner than anyone expected.

Whoever builds a model that can generalize, self-learn, and transfer knowledge across different domains will likely control the future of technology, medicine, materials, and the geopolitical landscape. It’s safe to say that the world is now in a high-stakes race to build the first AGI. And whoever gets there first, wins.

The creation of "narrow" AI systems, like ChatGPT, has already been surprising. These systems are constrained to specific tasks, such as conversations, answering questions, creating images from prompts, and even providing domain-specific expertise. OpenAI models can now exceed PhD-level human expertise in mathematics, science, and law.

When ChatGPT was first released to the public two years ago, I remember raising an eyebrow. I was intrigued, but also knew its limitations–—it couldn’t even reverse a numbered list–—and its veer-off-the-ramp hallucinations were also quite laughable. 

But now it’s no longer funny. These generative AI models have become significantly more powerful. The possibility that AGI could become a reality within the next decade is something we should take extremely seriously.

So, I want to explore a few things: how these generative models work, how they’re going to transform society in the coming years (and what people can do to avoid falling behind), the obstacles that AGI development faces, and what the future with an early-version AGI could look like.

<h4>Artificial Neural Networks</h4>

Artificial neural networks are an architecture that link together mathematical representations of biological neurons. They enable machines to learn from experience. The function of artificial neurons is to make decisions in the form of positive or negative signals, that is, by sending a signal on to the next neuron, or not sending a signal; these decisions can be represented by 1 or 0.


A common artificial neuron used in machine learning is the sigmoid neuron (named after the S-shaped sigmoid curve). In a sigmoid neuron, the total input z is a function of the bias b of the neuron and the sum over all it's incoming connections of the activity on an input line (represented by x) multiplied by w, the probabilistic weight on that input line:

<center><img src="/assets/images/input.png" style="width:150px"></center>
<br>
Whereas the output of the sigmoid neuron is a real-value number that is smooth and always between the total input. The output is represented by the logistic function:
<br>
<center><img src="/assets/images/output.png" style="width:120px"></center>
<br>

If the total input z is large and positive, e to the minus a large positive number will be 0; so the output of the neuron is going to be 1. If the total input is large and negative, e to the minus a large negative number is itself going to be a large number, so the output of the neuron will be 0. What this means is that if the input is 0, then the output will be 0.5, which is the resting threshold of sigmoid neurons. Positive inputs thus get a probability closer to 1, while negative inputs get a probability closer to 0. That is how artificial neurons compute decisions.

<h4>Generative AI</h4>

Generative AI models like ChatGPT are based on the principle of next word prediction. During training, massive data samples are fed into artificial neural networks, and these networks analyse the relationship between words, phrases and sentences. 

The text is then split into smaller units called tokens, which are then mathematically represented into a numerical format using word embeddings. Word embeddings are vector representations of words, and they capture the semantic meaning of words based on context. Words that are similar in meaning to each other are given similar vectors, or are closer in vector space, just as with words that are more likely to follow one-another. For example, it can learn that in the sentence "Scientists have discovered a...", the word "new" is likely to follow. It assigns this word a probability closer to 1.
<html>
<body>
Given some input, AI models treat language prediction as a conditional probability. For an input sequence of tokens w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>,..., w<sub>n</sub> their task is to calculate P (w<sub>n</sub> | w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>,..., w<sub>n-1</sub>). This is the probability of the next token w<sub>n</sub> given the previous input tokens.

I am oversimplifying here; because the deep learning rabbit hole is a deep one. Concepts like attention, regression, gradient descent, bias, and back-propagation also play an indispensable role (not to mention convolutional neural networks for dynamic vision based tasks).
</body>
</html>

<h4>The Path to AGI</h4>

It's unclear whether AGI will require new computing clusters the likes of which the world has never seen before. In personal computers, the unit of computation is the processor; in data centres, it is the rack. If AGI is to become a reality, the unit of computation might require upscaling to the data centre; that is, the whole data centre becomes the unit of computation. This is possible within a decade, and we're going to see traction in this direction, with significant energy resources dedicated to artificial intelligence systems.

Furthermore, it is also unclear whether AGI requires consciousness; I suspect it does not. But as these systems are scaled, and if consciousness is an emergent property of neural systems, then AGI will posssess self-awareness. It will be able to reason in incredibly complex ways, much better than humans, and it will be able to understand, learn and generalise its intelligence far beyond human capabilities.

People have objected to the idea that artificial systems can "understand" in the same way human beings can. For example, the American philosopher John Searle proposed the Chinese Room argument in the 1980s to illustrate the intuition that machines cannot truly understand. 

The argument is as follows: imagine a room with input and output slits in the door. A person outside the room feeds Chinese characters through the input slit, unaware that someone inside the room is arranging the characters according to rules from an instruction book. The person inside then sends the ordered characters through the output slit, leading outsiders to mistakenly believe there is a Chinese speaker inside the room. Just as the person in the Chinese room is manipulating syntactical rules without understanding, the intuition conveys that artificial systems manipulate language in just the same way. 

The requirement of embodied physicality is another open question. For robotics, we know limbs can be treated as vectors; the motion of the hand is treated as an operation with both direction and magnitude. If AI systems are to exceed human capability in creative endeavours, then its likely that systems will need to advance to the extent that they can generate actions much like they can generate the next word. Solving smooth generative action is then going to be one of the key developments in the near future.

People have talked about multiple paths to AGI (Nick Bostrom, for example, in his book "Superintelligence"). The best path forward is undoubtedly the improvement of generative models (this is possible within a decade); there's also the method of whole brain emulation (this is possible as well); and human brain augmentation (unlikely within a decade, given the challenge of understanding and working with the brain directly). The path to AGI is thus likely to be a slow crawl through enhancement of generative AI models. That is, month by month, year by year, the capability of the models will be enhanced until they exceed human intelligence in all areas.

<h4>AI and Society</h4>

Artificial intelligence is going to transform society in rapid ways that we've never seen before; what previously took a century will take just years. Jobs will be affected; the gap between the rich and the poor may widen further; productivity differences will increase; and there may be job losses, likely to number in the tens or hundreds of millions.

AI will have impacts on healthcare and medicine, pharmacology, transportation, finance, materials, art and other creative industries, education, engineering and space exploration––virtually all domains of human activity. These systems will be the ultimate recipe makers, in the sense that answers provided by an AGI system can be fed back into it, generating better and better outputs. What's really difficult to understand is that an AI system at some point will have the capability to improve or make a better version of itself, leading to exponential growth in its capabilities, until it finally becomes indistinguishable to us. 

It is of course a different question when it comes to the role of human values––as to what sort of life you want to live. But for questions of productivity or economic growth––anyone, individual or corporation, who does not augment their daily life or operations with AI systems––will go the way of the dinosaurs. They will be productively and economically decimated. 

---

<p style="font-size:1.7em; margin-bottom:0"><strong>The Mind of Leonardo</strong></p>
<p style="font-size:0.9em;">Thursday, 5 December 2024</p>

<center><img src="/assets/images/davinci.png"></center>
<center><p style="font-size:0.9em; color: grey">A few examples of Leonardo's drawings, with self-portrait at age 60 in the centre. His notebook manuscripts are held in both public and private collections, notably by Bill Gates, the Ambrosiana, and the Royal Collection Trust.</p></center>


>“...the greatest geniuses sometimes accomplish more when they work less, since they are searching for inventions in their minds, and forming those perfect ideas which their hands then express and reproduce from what they previously conceived with their intellect." - Leonardo da Vinci

The great Renaissance biographer and painter Giorgio Vasari wrote of Leonardo da Vinci that, in the last moments of his life, he rebuked himself for having “offended God and mankind in not having worked at his art as he should have”. 

Da Vinci completed only about 20 paintings, but he left behind over 7,200 notebook pages, an accomplishment that reflects his unequaled range of intellectual passions. 

He was born in 1452, near the town of Vinci, just outside of Florence, Italy. He was an illegitimate child to a notary father and a peasant mother, and initially received training in the master workshop of Andrea del Verrocchio. Until his death at age 67 in 1519, and despite his prodigious output, Leonardo owned little and hardly worked. 

He tended to move between projects, leaving many of them unfinished (the Battle of Anghiari being a prominent example). Sigmund Freud characterised this tendency as the encroachment and subsequent suppression of the artist by the scientific personality which distinguished his life. 

Yet, Leonardo's skill and outlook earned him a great reputation, which only grew after his death, and it culminates in our understanding and appreciation of him as the archetypal Renaissance figure. This is what Vasari writes about the qualities exemplified in his work:

>“...Nature so favoured him that, wherever he turned his thought, his mind, and his heart, he demonstrated with such divine inspiration that no one else was ever equal to him in the perfection, liveliness, vitality, excellence, and grace of his works." 

He had elegance, finesse and neatness, and he enquired with unparalleled genius into the unity of nature and its variety of astonishing patterns. What is it that made da Vinci's mind special? 

To answer this question, it's essential to examine the extent of his contributions to painting, anatomy and scientific drawing, neuroscience, and ultimately, the blueprint of the scientific mind (this latter part will be addressed in a subscriber-only afterword to follow later). 

A full answer may not be possible to the aforementioned question. But nevertheless, unbundling and putting together certain ideas might reveal how the mind of that quintessential genius was always devising new things, and how we might be able to learn from him.

<h4>Leonardo as Artist</h4>

Da Vinci revered the sense of vision, and placed it as man's highest sense. He described the eye as "the window to the soul", and the most important basis of all experience. Vision's role, beyond providing fundamental perceptual knowledge, involves the artist's use of the faculty in faithfully interpreting nature: 

>"The painter's mind must of necessity enter into nature's mind in order to act as an interpreter between nature and art".

To peer into nature's mind, Da Vinci understood that the artist must learn the laws of reality and its manifestations as perspective. He conceived of perspective as the seeing of an object behind a sheet of glass, and by which a pyramidal cross section is cut by the glass; thus all points of perspective can be expressed by point, line, angle, surface, and body. He also devised three branches of perspective:

>"...the first deals with the reasons of the [apparent] diminution of the volume of opaque bodies as they recede from the eye, and is known as Diminishing or Linear Perspective. The second contains the way in which colours vary as they recede from the eye. The third and last is concerned with how the outlines of objects [in a picture] ought to be less finished in proportion as they are remote."

These laws of perspective were to be kept in mind so that only what could be seen with certainty was depicted as certain; that which was seen with difficulty was to be made indefinite. Lines were to be blurred and suggestively left open. His drawings were only made of outlines and hatching marks in accordance with those laws, and yet they convey unrivalled volume and dynamism.
<br>
<center><img src="/assets/images/davinci-perspective.jpeg"></center><br>

Leonardo's technique can thus be seen as a solution to the duality between abstraction, and a naturalistic interpretation of reality. This is best exemplified in some of his hydrodynamic and geological drawings. In them, he wanted to carry across the dynamic forces of nature, stones slowly shifting across the ages, as the roots of plants growing in the crevices were tearing those very stones out, moving them ever so slightly from the old place they once occupied. Water rapids rippling and creating vortices. In these images, amongst others, Leonardo shows that nature transforms everything.

His drawings convey movement and the moving figure in a style that possesses exemplary confidence and control over artistic tools. As a student of reality, in which he placed supreme trust in the instruction provided by the visible world, he carefully studied figures using his cross-hatching technique. 

This allowed him not only to depict his close observations, but also to best old techniques in faithfully conveying distance, the intangible density of the atmosphere, and the idea that the world exists as a spatial continuum.

Leonardo divided the science of painting into drawing and shading, and it was for him the "true knowledge and legitimate issue of nature". There's a further passage in which he explains his thought process as to how the artist should best consider painting:

>"...as subtle invention which brings philosophy and subtle speculation to the consideration of all forms - seas and plains, trees, animals, plants and flowers - which are surrounded by light and shade".

<br>

<center><img src="/assets/images/saint-john-the-baptist-leonardo-da-vinci.jpeg"></center>
<center><p style="font-size:0.9em; color: grey">A detail from Saint John the Baptist by Leonardo da Vinci.</p></center>

This is a philosophy that is evident more so in the Mona Lisa and Saint John the Baptist, than any of his other paintings. About the former, read what Vasari had to say:

>"The eyes have the lustre and moisture always seen in living people, while around them are the lashes and all the reddish tones which cannot be produced without the greatest care. The eyebrows could not be more natural, for they represent the way the hair grows in the skin—thicker in some places and thinner in others, following the pores of the skin. The nose seems lifelike with its beautiful pink and tender nostrils. The mouth, with its opening joining the red of the lips to the flesh of the face, seemed to be real flesh rather than paint. Anyone who looked very attentively at the hollow of her throat would see her pulse beating: to tell the truth, it can be said that portrait was painted in a way that would cause every brave artist to tremble and fear, whoever he might be."

To breathe life into portraiture, anatomical details and structure were to be carefully extracted from reality itself, so that the mouth and the lips may be joined to the face as a continuous surface. 

Only by seeing and learning from direct observation how each thing is formed can the artist learn to reproduce each part. And by faithfully combining parts that he has learnt how to draw, he may reproduce the whole. But he also knew that this process must be achieved step by step:

>"The organ of sight is one of the quickest, and takes in at a single glance an infinite variety of forms; notwithstanding which, it cannot perfectly comprehend more than one object at a time. For example, the reader, at one look over this page, immediately perceives it full of different characters; but he cannot at the same moment distinguish each letter, much less can he comprehend their meaning. He must consider it word by word, and line by line, if he be desirous of forming a just notion of these characters. In like manner, if we wish to ascend to the top of an edifice, we must be content to advance step by step, otherwise we shall never be able to attain it."


<h4>Scientific Drawing & Anatomy</h4>

Leonardo was a student of reality; being the first to draw in the open air, he inquired into the cause and reason of all visible things, and can be described as a visual empiricist. While he was knowledgeable of the scientific literature of his time and what had come before, he kept himself free and unconstrained by past thinkers. He accepted those things only which he could prove by the direct perception of his own eyes.

<center><img src="/assets/images/davinci-star-bethlehem.jpeg" style="height:500px"></center><br>

In his drawing "The Star of Bethlehem", he is able to depict the power of growth inherent in plants, the elasticity of twigs; and the correct observation and order of spiral shapes found in nature. There exists in them a combinatorial understanding of morphology and function of physiological principles that govern life. His drawings extract the "atmosphere of life" and make plants and animals look alive, since he is able to visualise the macro forces which we might characterise as the engine of life itself.
<br>

<center><img src="/assets/images/davinci-animals.jpeg"></center><br>

Leonardo thought of life as both a mechanism and organism. He thought of the earth as possessing a "spirit of growth"; and the soil as the flesh, its rocks as bones, limestone as the cartilage and "its blood, the springs of water". 

The motion of animals, the major one found in nature he called "serpegiamento", or snake-like. It is a movement that he studied extensively and can be seen in the animal drawings, from horses to cats and fantastical dragons. 

He used drawing to convey scientific knowledge (the empiricism aspect). Regarding the capturing of man in his anatomical studies, he warned against description without visualisation:

>"And you who wish to represent by words the form of man and all the aspects of his membrification, get away from that idea. For the more minutely you describe, the more you will confuse the mind of the reader and the more you will prevent him from a knowledge of the thing described. And so it is necessary to draw and to describe".

<br>

<center><img src="/assets/images/davinci-anatomy.png"></center><br>

Leonardo's concept of drawing meant a new era for the human mind had emerged. Had his notebooks been published during his lifetime, or even the anatomical treatises he set out to complete but never did, the most profound revolution would have occurred in science. Yet, progress in anatomy was left to other great minds like Andreas Vesalius, with the publication of his treatise "On the Fabric of the Human Body in Seven Books". 

On anatomy, Leonardo advised that the painter should be,

>"...thoroughly familiar with the limbs in all the positions and actions of which they are capable, in the nude. [Then he will] know the anatomy of the sinews, bones, muscles, and tendons so that, in their various movements and exertions, he may know which nerve or muscle is the cause of each movement and show those only as prominent and thickened..." 


<h4>Contributions to Neuroscience</h4>

Beyond his pioneering work in painting, anatomy and scientific drawing, Leonardo wanted to prove that the mind has a physical basis. He wished to show the mechanisms by which the brain makes sensory stimuli intelligible, and thus show the functioning of the mind. 

A few of his drawings depict three ventricles in the brain, cavities filled with cerebrospinal fluid, the first being responsible for the processing of sensory stimuli; the second housing thought and the integration of the senses; and the last ventricle by means of which thought and sensation are imprinted into memory.
<br>

<center><img src="/assets/images/davinci-brain.png"></center><br>

The second ventricle is depicted as being in the geometric centre of the brain, thus denoting "the locus of the soul". This for Da Vinci was the place where the senses came together to form the "sense communis", or common sense, the seat of universal judgment:

>"The soul apparently resides in the seat of the judgment, and the judgment apparently resides in the place where all the senses meet, which is called the common sense."

While this theory is known to be false, since we know the physical basis of the mind rests on electro-chemical communication between specialised neurons, it is nevertheless a triumph of his era, since he went beyond anything that had been put forward before. 

To conclude, let's read an extract from Otto Benesch's essay, Leonardo da Vinci and Scientific Drawing (1943) that captures some aspects of his genius (and the likes of which I hope humanity will see again):

>"This vision of cosmic grandeur reveals the deep intuition of the artistic genius. Leonardo's scientific insight is unthinkable without his artistic imagination. The artist and the scientist are interdependent. Leonardo possessed not only the masculine sovereign and creative power, but also the feminine gift of highest empathy. He lived in the heart of things. His drawings prove that he felt like the object which he portrayed, that he identified himself with it. He looked at the world from the center, from the matrix, and it became diaphanous to him in an almost magic clearness. Thus, both intuition and divination served as guides for this greatest intellect among the artists in his scientific accomplishments." 
