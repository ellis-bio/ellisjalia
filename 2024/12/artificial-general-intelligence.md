---
layout: default
permalink: /2024/12/13/artificial-general-intelligence/
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
<style>
a {
color: black;
text-decoration: none;
}
a:hover {
  color: tomato;
  text-decoration: none;
}
</style>
<p style="font-size:1.7em; margin-bottom:0"><b><a href="https://ellisjalia.com/2024/12/13/artificial-general-intelligence/">Artificial General Intelligence</a></b></p>
<p style="font-size:0.95em; color: silver">Friday, December 13, 2024</p>

<center><img src="/assets/images/agi.png"></center>
<center><p style="font-size:1em; color: grey">A depiction of artificial general intelligence created using OpenAI's ChatGPT. Each node represents an artificial neuron, while the red spark at the centre of the head symbolizes the emergent property of phenomenal consciousness.</p></center>

<p>A.G.I––Artificial General Intelligence. If you had asked someone ten years ago when humanity would achieve artificial general intelligence, they might have said within a century. The development of generative AI models like OpenAI's ChatGPT has shifted the conversation. Artificial general intelligence could now become a reality much sooner than anyone expected.</p>

<p>Whoever builds a model that can generalize, self-learn, and transfer knowledge across different domains will likely control the future of technology, medicine, materials, and the geopolitical landscape. It’s safe to say that the world is now in a high-stakes race to build the first AGI. And whoever gets there first, wins.
</p>

<p>The creation of "narrow" AI systems, like ChatGPT, has already been surprising. These systems are constrained to specific tasks, such as conversations, answering questions, creating images from prompts, and even providing domain-specific expertise. OpenAI models can now exceed PhD-level human expertise in mathematics, science, and law.
</p>

<p>When ChatGPT was first released to the public two years ago, I remember raising an eyebrow. I was intrigued, but also knew its limitations–—it couldn’t even reverse a numbered list–—and its veer-off-the-ramp hallucinations were also quite laughable. 
</p>

<p>But now it’s no longer funny. These generative AI models have become significantly more powerful. The possibility that AGI could become a reality within the next decade is something we should take extremely seriously.</p>

<p>But now it’s no longer funny. These generative AI models have become significantly more powerful. The possibility that AGI could become a reality within the next decade is something we should take extremely seriously.</p>

<p>So, I want to explore a few things: how these generative models work, how they’re going to transform society in the coming years (and what people can do to avoid falling behind), the obstacles that AGI development faces, and what the future with an early-version AGI could look like.</p>

<h4>Artificial Neural Networks</h4>

<p>Artificial neural networks are an architecture that link together mathematical representations of biological neurons. They enable machines to learn from experience. The function of artificial neurons is to make decisions in the form of positive or negative signals, that is, by sending a signal on to the next neuron, or not sending a signal; these decisions can be represented by 1 or 0.
</p>

<p>A common artificial neuron used in machine learning is the sigmoid neuron (named after the S-shaped sigmoid curve). In a sigmoid neuron, the total input z is a function of the bias b of the neuron and the sum over all its incoming connections of the activity on an input line (represented by x) multiplied by w, the probabilistic weight on that input line:</p>

<center><img src="/assets/images/input.png" style="width:150px; margin-top: 1em; margin-bottom:2em;"></center>

<p>Whereas the output of the sigmoid neuron is a real-value number that is smooth and always between the total input. The output is represented by the logistic function:</p>

<center><img src="/assets/images/output.png" style="width:120px; margin-top: 1em; margin-bottom:2em;"></center>

<p>If the total input z is large and positive, e to the minus a large positive number will be 0; so the output of the neuron is going to be 1. If the total input is large and negative, e to the minus a large negative number is itself going to be a large number, so the output of the neuron will be 0. What this means is that if the input is 0, then the output will be 0.5, which is the resting threshold of sigmoid neurons. Positive inputs thus get a probability closer to 1, while negative inputs get a probability closer to 0. That is how artificial neurons compute decisions.</p>

<h4>Generative AI</h4>
<p>Generative AI models like ChatGPT are based on the principle of next word prediction. During training, massive data samples are fed into artificial neural networks, and these networks analyse the relationship between words, phrases and sentences. 
</p>

<p>The text is then split into smaller units called tokens, which are then mathematically represented into a numerical format using word embeddings. Word embeddings are vector representations of words, and they capture the semantic meaning of words based on context. Words that are similar in meaning to each other are given similar vectors, or are closer in vector space, just as with words that are more likely to follow one-another. For example, it can learn that in the sentence "Scientists have discovered a...", the word "new" is likely to follow. It assigns this word a probability closer to 1.</p>

<p>Given some input, AI models treat language prediction as a conditional probability. For an input sequence of tokens w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>,..., w<sub>n</sub> their task is to calculate P (w<sub>n</sub> | w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>,..., w<sub>n-1</sub>). This is the probability of the next token w<sub>n</sub> given the previous input tokens.</p>

<p>I am oversimplifying here; because the deep learning rabbit hole is a deep one. Concepts like attention, regression, gradient descent, bias, and back-propagation also play an indispensable role (not to mention convolutional neural networks for dynamic vision based tasks).</p>

<h4>The Path to AGI</h4>

<p>It's unclear whether AGI will require new computing clusters the likes of which the world has never seen before. In personal computers, the unit of computation is the processor; in data centres, it is the rack. If AGI is to become a reality, the unit of computation might require upscaling to the data centre; that is, the whole data centre becomes the unit of computation. This is possible within a decade, and we're going to see traction in this direction, with significant energy resources dedicated to artificial intelligence systems.
</p>

<p>Furthermore, it is also unclear whether AGI requires consciousness; I suspect it does not. But as these systems are scaled, and if consciousness is an emergent property of neural systems, then AGI will posssess self-awareness. It will be able to reason in incredibly complex ways, much better than humans, and it will be able to understand, learn and generalise its intelligence far beyond human capabilities.</p>

<p>People have objected to the idea that artificial systems can "understand" in the same way human beings can. For example, the American philosopher John Searle proposed the Chinese Room argument in the 1980s to illustrate the intuition that machines cannot truly understand.</p>

<p>The argument is as follows: imagine a room with input and output slits in the door. A person outside the room feeds Chinese characters through the input slit, unaware that someone inside the room is arranging the characters according to rules from an instruction book. The person inside then sends the ordered characters through the output slit, leading outsiders to mistakenly believe there is a Chinese speaker inside the room. Just as the person in the Chinese room is manipulating syntactical rules without understanding, the intuition conveys that artificial systems manipulate language in just the same way. </p>

<p>The requirement of embodied physicality is another open question. For robotics, we know limbs can be treated as vectors; the motion of the hand is treated as an operation with both direction and magnitude. If AI systems are to exceed human capability in creative endeavours, it's likely that systems will need to advance to the extent that they can generate actions much like they can generate the next word. Solving smooth generative action is then going to be one of the key developments in the near future.</p>

<p>People have talked about multiple paths to AGI (Nick Bostrom, for example, in his book "Superintelligence"). The best path forward is undoubtedly the improvement of generative models (this is possible within a decade); there's also the method of whole brain emulation (this is possible as well); and human brain augmentation (unlikely within a decade, given the challenge of understanding and working with the brain directly). The path to AGI is thus likely to be a slow crawl through enhancement of generative AI models. That is, month by month, year by year, the capability of the models will be enhanced until they exceed human intelligence in all areas.
</p>

<h4>AI and Society</h4>

<p>Artificial intelligence is going to transform society in rapid ways that we've never seen before; what previously took a century will take just years. Jobs will be affected; the gap between the rich and the poor may widen further; productivity differences will increase; and there may be job losses, likely to number in the tens or hundreds of millions.
</p>

<p>AI will have impacts on healthcare and medicine, pharmacology, transportation, finance, materials, art and other creative industries, education, engineering and space exploration––virtually all domains of human activity. These systems will be the ultimate recipe makers, in the sense that answers provided by an AGI system can be fed back into it, generating better and better outputs. What's really difficult to understand is that an AI system at some point will have the capability to improve or make a better version of itself, leading to exponential growth in its capabilities, until it finally becomes indistinguishable to us. </p>

<p>It is of course a different question when it comes to human values––as to what sort of life you want to live. But for questions of productivity or economic growth––anyone, individual or corporation, who does not augment their daily life or operations with AI systems––will go the way of the dinosaurs. They will be productively and economically decimated.</p>

<p>The best way to stay ahead is to learn to use the tools available.</p>

<hr>