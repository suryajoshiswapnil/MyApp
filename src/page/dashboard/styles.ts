/**
 * @author Swapnil Suryajoshi<swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */
import { createStyle } from '../../util';
import { colors, typography } from '../../constant';

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
    fontSize: typography.size.md,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontWeight: '500',
    fontSize: typography.size.md,
  },
  contentText: {
    fontSize: typography.size.xl,
  },
  buttonContainer: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.surface,
  },
  buttonLabel: {
    fontSize: typography.size.xl,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default styles;
