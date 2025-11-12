export type Priority = 'cost' | 'flavor' | 'texture';
export type Doneness = 'rare' | 'medium-rare' | 'medium' | 'medium-well' | 'well-done';

export interface SteakResult {
    optionA: string;
    descriptionA: string;
    optionB: string;
    descriptionB: string;
}

export const steakRecommendations: Record<string, SteakResult>={
    'flavor-texture-cost_rare': {
        optionA: 'Flat Iron',
        descriptionA: 'Tender, well-marbled cut from the shoulder that is lean, rich, and flavorful.',
        optionB: 'Strip Steak',
        descriptionB: 'Rare Strip Steak comes from the loin and is a classic, firmer steak with good beefy flavor and moderate marbling.'
    },
    'flavor-cost-texture_rare': {
        optionA: 'Sirloin',
        descriptionA: 'Cool, red center, and a seared exterior. This is a tender and juicy steak.',
        optionB: 'Round',
        descriptionB: 'This steak is significantly leaner and tougher. Also, with a cool red center, but more chewy texture.'
    },
    'texture-flavor-cost_rare': {
        optionA: 'Tenderloin',
        descriptionA: 'Another way to call this steak is "Filet Mignon". Exceptionally tender, has a mild beefy flavor, and a fine grain.',
        optionB: 'Denver',
        descriptionB: 'Tender and flavorful as well, but more richly marbled, giving a texture and taste closer to a ribeye or New York strip. Good choice for people who loves to try new things.'
    },
    'texture-cost-flavor_rare': {
        optionA: 'Flat Iron',
        descriptionA: 'This is a very tender steak, but more marbled and flavorful, coming from the shoulder area and having a more robust beefy taste.',
        optionB: 'Tenderloin',
        descriptionB: 'Another way to call this steak is "Filet Mignon". It is the most tender, mild-flavored cut from the loin. Its buttery texture is delightful, which make this steak high price due to its rarity.'
    },
    'cost-flavor-texture_rare': {
        optionA: 'Sirloin',
        descriptionA: 'This is a cool, red center, and a seared exterior. You can enjoy the tender and juiciness with a lower price point compared to premium cuts.',
        optionB: 'Round',
        descriptionB: 'This steak is significantly leaner and tougher. Also, with a cool red center, but more chewy texture. Leaving room to explore different seasoning. But watch out, no need to over-seasoning!'
    },
    'cost-texture-flavor_rare': {
        optionA: 'Denver',
        descriptionA: 'A well-marbled, tender cut from the chuck, often prepared rare to medium-rare. Also, a very economic way to try new rare steaks.',
        optionB: 'Flank, Flap, or Skirt Steak',
        descriptionB: 'They are leaner, and flavorful cuts from the belly area that require high-heat cooking and slicing against the grain to remain tender. Flap steak is similar to flank, but more tender and less expensive, while skirt steak is thinner and has a richer, fattier flavor and is the classic choice for fajitas.'
    },
    'flavor-texture-cost_medium-rare': {
        optionA: 'Ribeye',
        descriptionA: 'Tender, juicy, and rich marbled steak with a cool red center.',
        optionB: 'Strip Steak',
        descriptionB: 'Leaner than ribeye, but a good alternative option. Strip Steak is firmer, and has less intense beefy flavor.'
    },
    'flavor-cost-texture_medium-rare': {
        optionA: 'Sirloin',
        descriptionA: 'Tender, lean cut with a good beefy flavor.',
        optionB: 'Flank, Flap, or Skirt Steak',
        descriptionB: 'This steak is significantly leaner and tougher. Good when marinated, and thin slices against the grain after cooking to medium-rare.'
    },
    'texture-flavor-cost_medium-rare': {
        optionA: 'Tenderloin',
        descriptionA: 'Another way to call this steak is "Filet Mignon". Exceptionally tender, has a mild beefy flavor, and a fine grain.',
        optionB: 'Strip Steak',
        descriptionB: 'This steak will turn more firm and will have a deeper, beefier flavor when is medium rare.'
    },
    'texture-cost-flavor_medium-rare': {
        optionA: 'Flat Iron',
        descriptionA: 'This is a very tender steak, but more marbled and flavorful, coming from the shoulder area and having a more robust beefy taste.',
        optionB: 'Denver',
        descriptionB: 'Well-marbled cut from the shoulder. It provides a tender, beefy flavor that is surprising juicy despite its location on a used muscle.'
    },
    'cost-flavor-texture_medium-rare': {
        optionA: 'Sirloin',
        descriptionA: 'This is a cool, red center, and a seared exterior. You can enjoy the tender and juiciness with a lower price point compared to premium cuts.',
        optionB: 'Flank, Flap, or Skirt Steak',
        descriptionB: 'This steak is significantly leaner and tougher. Good when marinated, and thin slices against the grain after cooking to medium-rare.'
    },
    'cost-texture-flavor_medium-rare': {
        optionA: 'Denver',
        descriptionA: 'A well-marbled, tender cut from the chuck, often prepared rare to medium-rare. Also, a very economic way to try new rare steaks.',
        optionB: 'Flank, Flap, or Skirt',
        descriptionB: 'They are leaner, and flavorful cuts from the belly area that require high-heat cooking and slicing against the grain to remain tender. Flap steak is similar to flank, but more tender and less expensive, while skirt steak is thinner and has a richer, fattier flavor and is the classic choice for fajitas.'
    },
    'flavor-texture-cost_medium': {
        optionA: 'Ribeye',
        descriptionA: 'Warm, pink steak with more firmness than medium-rare, and a richer, buttery flavor from high marbling, and a velvety texture.',
        optionB: 'Strip Steak',
        descriptionB: 'Leaner than ribeye, also warm and pink but has a chewier texture with a beefier, less fatty flavor from less internal marbling, though it still has a fat cap on the side.'
    },
    'flavor-cost-texture_medium': {
        optionA: 'Sirloin',
        descriptionA: 'Warm, pink center, and a slightly firmer texture than medium-rare.',
        optionB: 'Chuck Eye Steak',
        descriptionB: 'Marbled, rich, and flavorful cut from the shoulder, often called the "Poor Man\'s Ribeye", and can be cooked to a medium doneness for a tender, juicy result.'
    },
    'texture-flavor-cost_medium': {
        optionA: 'Tenderloin',
        descriptionA: 'Another way to call this steak is "Filet Mignon". Exceptionally tender, has a mild beefy flavor, and a fine grain.',
        optionB: 'Strip Steak',
        descriptionB: 'More robust and flavorful due to higher marbling, but still tender with a satisfying, slightly chewy texture.'
    },
    'texture-cost-flavor_medium': {
        optionA: 'Flat Iron',
        descriptionA: 'This is a very tender steak, but more marbled and flavorful, coming from the shoulder area and having a more robust beefy taste.',
        optionB: 'Denver',
        descriptionB: 'This steak is also from the shoulder but from a different location underneath the blade, is known for its rich, beefy flavor and tenderness due to good marbling and the protected position of the muscle.'
    },
    'cost-flavor-texture_medium': {
        optionA: 'Flank, Flap or Skirt Steak',
        descriptionA: 'These steaks are all from the cow\'s abdominal or belly area, which make them flavorful, fibrous, and benefit from marinating and high-heat cooking.',
        optionB: 'Chuck Eye Steak',
        descriptionB: 'This steak is from the shoulder, and it is more tender and flavorfu; cut similar to ribeye but is better suited for slow cooking or braising.'
    },
    'cost-texture-flavor_medium': {
        optionA: 'Denver',
        descriptionA: 'A well-marbled, tender cut from the chuck, often prepared rare to medium-rare. Also, a very economic way to try new rare steaks.',
        optionB: 'Flank, Flap, or Skirt',
        descriptionB: 'They are leaner, and flavorful cuts from the belly area that require high-heat cooking and slicing against the grain to remain tender. Flap steak is similar to flank, but more tender and less expensive, while skirt steak is thinner and has a richer, fattier flavor and is the classic choice for fajitas.'
    },
    'flavor-texture-cost_medium-well': {
        optionA: 'Ribeye',
        descriptionA: 'Firmer texture and more flavor with a hint of pink in the very center, which is sometimes called "pale pink".',
        optionB: 'Strip Steak',
        descriptionB: 'Leaner than ribeye, but a good alternative option. Strip Steak is leaner, and has less intense beefy flavor.'
    },
    'flavor-cost-texture_medium-well': {
        optionA: 'Chuck Eye Steak',
        descriptionA: 'This is a tender, rich, and flavorful cut from the shoulder that can be cooked to medium-well.',
        optionB: 'Flank Steak',
        descriptionB: 'Medium-well is best for flank, but for flap and skirt steak are best cooked medium-rare to medium for optimal tenderness. Flank is leaner than the other two, and works well pan-seared.'
    },
    'texture-flavor-cost_medium-well': {
        optionA: 'Strip',
        descriptionA: 'This steak will have a more pronounced, chewier bite at this doneness.',
        optionB: 'Ribeye',
        descriptionB: 'Mostly brown interior and only a faint blush of pink remaining. This steak\'s texture will be firm and the juices will be significantly reduced, with a deep brown and well-seared exterior.'
    },
    'texture-cost-flavor_medium-well': {
        optionA: 'Flat Iron',
        descriptionA: 'This is a very tender steak, but more marbled and flavorful, coming from the shoulder area and having a more robust beefy taste.',
        optionB: 'Chuck Eye',
        descriptionB: 'Also known as "Poor Man\'s Ribeye" is a similarly juicy and tender steak, sourced from the shoulder, that is also suitable for medium-well cooking, benefiting from the rendering fat for flavor.'
    },
    'cost-flavor-texture_medium-well': {
        optionA: 'Chuck Eye',
        descriptionA: 'Well-marbled, flavorful cut.',
        optionB: 'Flank Steak',
        descriptionB: 'Medium-well is best for flank, but for flap and skirt steak are best cooked medium-rare to medium for optimal tenderness. Flank is leaner than the other two, and works well pan-seared.'
    },
    'cost-texture-flavor_medium-well': {
        optionA: 'Chuck Eye',
        descriptionA: 'Well-marbled, flavorful cut.',
        optionB: 'Flank Steak',
        descriptionB: 'Medium-well is best for flank, but for flap and skirt steak are best cooked medium-rare to medium for optimal tenderness. Flank is leaner than the other two, and works well pan-seared.'
    },
    'flavor-texture-cost_well-done': {
        optionA: 'Ribeye',
        descriptionA: 'No pink inside! More tender and rich due to its high fat content.',
        optionB: 'Strip Steak',
        descriptionB: 'A well-done Strip Steak will be leaner. It can be tougher but still has a rich flavor from its thick rim of fat.'
    },
    'flavor-cost-texture_well-done': {
        optionA: 'Chuck Eye Steak',
        descriptionA: 'Tough and dry, and no pink due to the cut\'s tendency to become dry when overcooked.',
        optionB: 'Flank Steak',
        descriptionB: 'This steak will be chewy and tough, with a strong, beefy flavor, as it is lean and cooked beyond medium.'
    },
    'texture-flavor-cost_well-done': {
        optionA: 'Ribeye',
        descriptionA: 'Very tender, fatty texture and a rich flavor.',
        optionB: 'Strip Steak',
        descriptionB: 'Firmer and chewier due to its lower fat content, though it still has a robust beefy flavor.'
    },
    'texture-cost-flavor_well-done': {
        optionA: 'Flat Iron',
        descriptionA: 'Tough, dry texture and no pink inside.',
        optionB: 'Chuck Eye',
        descriptionB: 'Tough and dry, but may retain some flavor due to its fattier nature.'
    },
    'cost-flavor-texture_well-done': {
        optionA: 'Chuck Eye',
        descriptionA: 'Tough, dry, and less flavorful version of what is typically a tender cut.',
        optionB: 'Flank Steak',
        descriptionB: 'Tough, but more manageable if sliced very thinly against the grain after cooking.'
    },
    'cost-texture-flavor_well-done': {
        optionA: 'Chuck Eye',
        descriptionA: 'Tough, dry, and less flavorful version of what is typically a tender cut.',
        optionB: 'Flank Steak',
        descriptionB: 'Tough, but more manageable if sliced very thinly against the grain after cooking.'
    },
}

export function getRecommendation(
    priorities:[Priority, Priority, Priority],
    doneness: Doneness
): SteakResult {
    const key = `${priorities.join('-')}_${doneness}`;
    return steakRecommendations[key];
}
