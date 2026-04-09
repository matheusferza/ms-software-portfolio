import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { DynamicComponent } from '@/components/components-registry';
import FormBlock from '@/components/molecules/FormBlock';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ContactSection(props) {
    const { elementId, colors, backgroundSize, title, text, form, media, styles = {} } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} backgroundSize={backgroundSize} styles={styles.self}>
            <div className={classNames('contact-grid', mapFlexDirectionStyles(styles.self?.flexDirection ?? 'row'))}>
                <div className={classNames('section-panel contact-copy', mapStyles({ textAlign: sectionAlign }))}>
                    {title && <div className="section-kicker">Contato</div>}
                    {title && <h2 className="section-title">{title}</h2>}
                    {text && (
                        <Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames(
                                'max-w-none prose sm:prose-lg',
                                mapStyles({ textAlign: sectionAlign }),
                                {
                                    'mt-4': title
                                }
                            )}
                        >
                            {text}
                        </Markdown>
                    )}
                </div>
                {(form || media) && (
                    <div className="section-panel contact-form-shell">
                        {form && (
                            <>
                                <h3>Fale comigo sobre o seu projeto</h3>
                                <p>Respondo com foco em clareza, prazo e solução viável para o seu contexto.</p>
                                <FormBlock {...form} className={classNames({ 'mt-8': title || text })} />
                            </>
                        )}
                        {media && (
                            <div
                                className={classNames('mt-8 flex w-full', {
                                    'justify-center': sectionAlign === 'center',
                                    'justify-end': sectionAlign === 'right'
                                })}
                            >
                                <ContactMedia media={media} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Section>
    );
}

function ContactMedia({ media }) {
    return <DynamicComponent {...media} />;
}

function mapFlexDirectionStyles(flexDirection?: 'row' | 'row-reverse' | 'col' | 'col-reverse') {
    switch (flexDirection) {
        case 'row-reverse':
            return 'flex-col-reverse lg:flex-row-reverse lg:items-center';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return 'flex-col lg:flex-row lg:items-center';
    }
}
