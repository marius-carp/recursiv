function WorksheetPreview({ questions, title, includeNameDate, layoutMode }) {
  const renderWorksheet = (showAnswers = false, key = '') => {
    // Cap questions based on layout mode
    const maxQuestions = layoutMode === 'full' ? questions.length : layoutMode === 'half' ? 20 : 10;
    const displayQuestions = questions.slice(0, maxQuestions);

    const questionsPerColumn = layoutMode === 'full' ? 19 : layoutMode === 'half' ? 10 : 10;
    const columns = layoutMode === 'full' ? 2 : layoutMode === 'half' ? 2 : 2;

    return (
      <div
        key={key}
        className={`bg-white shadow-lg mx-auto ${
          layoutMode === 'full' ? 'w-[8.5in] h-[11in]' : ''
        }`}
        style={{
          width: layoutMode === 'full' ? '8.5in' : '8.5in',
          minHeight: layoutMode === 'full' ? '11in' : '11in',
          padding: '1in',
        }}
      >
        {/* Header Section - Only for full layout */}
        {layoutMode === 'full' && (
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <h1 className="font-serif text-3xl font-bold text-on-surface mb-4">{title}</h1>
              {includeNameDate && (
                <div className="flex flex-col gap-2 min-w-[250px]">
                  <div className="flex items-end gap-2">
                    <span className="text-sm font-serif">Name:</span>
                    <div className="flex-1 border-b border-on-surface"></div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-sm font-serif">Date:</span>
                    <div className="flex-1 border-b border-on-surface"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="h-px bg-on-surface mt-2"></div>
          </div>
        )}

        {/* Questions Section */}
        {layoutMode === 'full' && (
          <div className="grid grid-cols-2 gap-x-12">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {displayQuestions
                  .slice(colIndex * questionsPerColumn, (colIndex + 1) * questionsPerColumn)
                  .map((q, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-sm text-on-surface-variant font-serif min-w-[20px]">
                        {colIndex * questionsPerColumn + idx + 1}.
                      </span>
                      <span className="font-serif text-lg">
                        {q.text}{' '}
                        {showAnswers ? (
                          <span className="font-bold">{q.answer}</span>
                        ) : (
                          <span className="inline-block border-b border-on-surface w-20"></span>
                        )}
                      </span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}

        {layoutMode === 'half' && (
          <div className="grid grid-cols-1 gap-8">
            {[0, 1].map((section) => (
              <div key={section} className="border-2 border-dashed border-outline-variant p-4 relative">
                {/* Header for each half section */}
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <h1 className="font-serif text-2xl font-bold text-on-surface mb-3">{title}</h1>
                    {includeNameDate && (
                      <div className="flex flex-col gap-2 min-w-[200px]">
                        <div className="flex items-end gap-2">
                          <span className="text-xs font-serif">Name:</span>
                          <div className="flex-1 border-b border-on-surface"></div>
                        </div>
                        <div className="flex items-end gap-2">
                          <span className="text-xs font-serif">Date:</span>
                          <div className="flex-1 border-b border-on-surface"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="h-px bg-on-surface mt-2"></div>
                </div>

                {/* Questions in 2 columns */}
                <div className="grid grid-cols-2 gap-x-8 relative">
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <div key={colIndex} className="space-y-3">
                      {displayQuestions
                        .slice(colIndex * questionsPerColumn, (colIndex + 1) * questionsPerColumn)
                        .map((q, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-xs text-on-surface-variant font-serif min-w-[16px]">
                              {colIndex * questionsPerColumn + idx + 1}.
                            </span>
                            <span className="font-serif text-base">
                              {q.text}{' '}
                              {showAnswers ? (
                                <span className="font-bold">{q.answer}</span>
                              ) : (
                                <span className="inline-block border-b border-on-surface w-16"></span>
                              )}
                            </span>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>

                {/* Watermark for each half section */}
                <div className="absolute bottom-2 right-2 text-[10px] text-on-surface-variant font-serif">
                  Generated by Recursiv
                </div>
              </div>
            ))}
          </div>
        )}

        {layoutMode === 'quarter' && (
          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((section) => (
              <div key={section} className="border-2 border-dashed border-outline-variant p-3 relative">
                {/* Header for each quarter section */}
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h1 className="font-serif text-xl font-bold text-on-surface mb-2">{title}</h1>
                    {includeNameDate && (
                      <div className="flex flex-col gap-1 min-w-[120px]">
                        <div className="flex items-end gap-1">
                          <span className="text-[10px] font-serif">Name:</span>
                          <div className="flex-1 border-b border-on-surface"></div>
                        </div>
                        <div className="flex items-end gap-1">
                          <span className="text-[10px] font-serif">Date:</span>
                          <div className="flex-1 border-b border-on-surface"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="h-px bg-on-surface mt-1"></div>
                </div>

                {/* Questions in single column */}
                <div className="space-y-2">
                  {displayQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs text-on-surface-variant font-serif min-w-[14px]">
                        {idx + 1}.
                      </span>
                      <span className="font-serif text-sm">
                        {q.text}{' '}
                        {showAnswers ? (
                          <span className="font-bold">{q.answer}</span>
                        ) : (
                          <span className="inline-block border-b border-on-surface w-12"></span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Watermark for each quarter section */}
                <div className="absolute bottom-1 right-1 text-[8px] text-on-surface-variant font-serif">
                  Generated by Recursiv
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer - Only for full layout */}
        {layoutMode === 'full' && (
          <div className="absolute bottom-4 right-8 text-xs text-on-surface-variant font-serif">
            Generated by Recursiv
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-surface p-10">
      {/* Preview (visible on screen) */}
      <div className="print-hidden">
        {questions.length > 0 ? (
          renderWorksheet(false, 'preview')
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-on-surface-variant">
              <p className="text-lg mb-2">Configure your worksheet settings</p>
              <p className="text-sm">Click "Generate New Problems" to start</p>
            </div>
          </div>
        )}
      </div>

      {/* Print version (hidden on screen, visible when printing) */}
      <div className="hidden print:block">
        {/* Student Worksheet */}
        {renderWorksheet(false, 'student')}

        {/* Answer Key - Only print one copy for half/quarter layouts */}
        {layoutMode === 'full' && (
          <div className="print-page-break">{renderWorksheet(true, 'answer-key')}</div>
        )}

        {(layoutMode === 'half' || layoutMode === 'quarter') && (
          <div className="print-page-break">{renderWorksheet(true, 'answer-key')}</div>
        )}
      </div>
    </div>
  );
}

export default WorksheetPreview;
