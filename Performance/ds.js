function getEmoji(feelings) {
  let emoji;

  if (feelings === 'calm') {
    emoji = '😇';
  } else if (feelings === 'happy') {
    emoji = '😄';
  } else if (feelings === 'thinking') {
    emoji = '🤔';
  } else if (feelings === 'sleepy') {
    emoji = '🥱';
  } else {
    emoji = '🥳';
  }
}