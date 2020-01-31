// return (
//     <Formik
//         initialValues={{
//             email: email ? email : '',
//             title: title ? title : '',
//             description: description ? description : '',
//             language: language ? language : 'ru',
//             timezone: moment.tz.guess(),
//             firstDay: firstDay ? firstDay : 'Monday',
//             indexing: false,
//             isTranslitUrl: false,
//             isActiveJivosite: false,
//             tel: tel ? tel : '',
//             address: address ? address : '',
//             country: country ? country : '',
//             coordinates: coordinates ? coordinates : '',
//             jivositeUrl: jivositeUrl ? jivositeUrl : '',
//         }}
//         enableReinitialize
//         onSubmit={(values) => {
//             const settings = new FormData();
//             settings.append('values', JSON.stringify(values));
//             settings.append('image', favicon);
//             putOptions(settings);
//         }}
//         validationSchema={SettingsFormSchema}>
//         {({ values, errors, touched }) => (
//             <Form>
//                 <div className="form-group">
//                     <label htmlFor="title">Title:</label>
//                     <Field name="title" className="form-control" />
//                     {errors.title && touched.title && (
//                         <span style={{ color: 'red' }}>{errors.title}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <Field name="description" className="form-control" />
//                     {errors.description && touched.description && (
//                         <span style={{ color: 'red' }}>{errors.description}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email:</label>
//                     <Field name="email" className="form-control" />
//                     {errors.email && touched.email && (
//                         <span style={{ color: 'red' }}>{errors.email}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="language">Выбрать язык:</label>
//                     <Field as="select" name="language" className="form-control">
//                         <option value="ru">Русский</option>
//                         <option value="en">English</option>
//                         <option value="uk">Украинский</option>
//                     </Field>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="timezone">Выбрать часовой пояс:</label>
//                     <Field as="select" name="timezone" className="form-control">
//                         {timeZones.map((item) => (
//                             <option value={item} key={item}>
//                                 {item}
//                             </option>
//                         ))}
//                     </Field>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="firstDay">Первый день недели:</label>
//                     <Field as="select" name="firstDay" className="form-control">
//                         <option>Sunday</option>
//                         <option>Monday</option>
//                         <option>Tuesday</option>
//                         <option>Wendsday</option>
//                         <option>Thursday</option>
//                         <option>Friday</option>
//                         <option>Saturday</option>
//                     </Field>
//                 </div>
//
//                 <div className="custom-control custom-switch">
//                     <Field
//                         type="checkbox"
//                         name="isTranslitUrl"
//                         id="isTranslitUrl"
//                         className="form-check-input custom-control-input"
//                     />
//                     <label htmlFor="isTranslitUrl" className="custom-control-label">
//                         Транслит URL
//                     </label>
//                     <p>
//                         {' '}
//                         example.com{values.isTranslitUrl
//                         ? translitCirillic(text)
//                         : text}{' '}
//                     </p>
//                 </div>
//                 <div className="custom-control custom-switch">
//                     <Field
//                         type="checkbox"
//                         name="indexing"
//                         id="indexing"
//                         className="form-check-input custom-control-input"
//                     />
//                     <label htmlFor="indexing" className="custom-control-label">
//                         Индексация сайта
//                     </label>
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="country">Страна:</label>
//                     <Field name="country" id="country" className="form-control" />
//                     {errors.country && touched.country && (
//                         <span style={{ color: 'red' }}>{errors.country}</span>
//                     )}
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="address">Адрес:</label>
//                     <Field name="address" id="address" className="form-control" />
//                     {errors.address && touched.address && (
//                         <span style={{ color: 'red' }}>{errors.address}</span>
//                     )}
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="tel">Телефон:</label>
//                     <Field name="tel" id="tel" className="form-control" />
//                     {errors.tel && touched.tel && (
//                         <span style={{ color: 'red' }}>{errors.tel}</span>
//                     )}
//                 </div>
//
//                 <div className="form-group">
//                     <label htmlFor="coordinates">Координаты:</label>
//                     <Field
//                         name="coordinates"
//                         id="coordinates"
//                         className="form-control"
//                     />
//                     {errors.coordinates && touched.coordinates && (
//                         <span style={{ color: 'red' }}>{errors.coordinates}</span>
//                     )}
//                 </div>
//
//                 <Favicon saveDroppedFavicon={saveDroppedFavicon} />
//
//                 <div className="form-group">
//                     <label htmlFor="jivositeUrl">Jivosite URL:</label>
//                     <Field
//                         name="jivositeUrl"
//                         id="jivositeUrl"
//                         className="form-control"
//                     />
//                     {errors.jivositeUrl && touched.jivositeUrl && (
//                         <span style={{ color: 'red' }}>{errors.jivositeUrl}</span>
//                     )}
//                 </div>
//
//                 <div className="custom-control custom-switch">
//                     <Field
//                         type="checkbox"
//                         name="isActiveJivosite"
//                         id="isActiveJivosite"
//                         className="form-check-input custom-control-input"
//                     />
//                     <label htmlFor="isActiveJivosite" className="custom-control-label">
//                         Включить Jivosite
//                     </label>
//                 </div>
//
//                 <div className="mt-4">
//                     <Button type="submit" className="submit">
//                         Submit
//                     </Button>
//                 </div>
//             </Form>
//         )}
//     </Formik>