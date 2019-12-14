/**
 * @author Swapnil Suryajoshi<swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { createStyle } from '../../util';
import { colors, fonts } from '../../constant';

const styles = createStyle({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
    fontSize: fonts.size.md,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontWeight: '500',
    fontSize: fonts.size.md,
  },
  contentText: {
    fontSize: fonts.size.xl,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.surface,
  },
  buttonLabel: {
    fontSize: fonts.size.xl,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default styles;
