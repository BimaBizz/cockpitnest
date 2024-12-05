<?php
 return [
  'name' => 'products',
  'label' => 'Products',
  'info' => '',
  'type' => 'collection',
  'fields' => [
    0 => [
      'name' => 'img',
      'type' => 'asset',
      'label' => 'img',
      'info' => 'max image is 4 over that will break style frontend',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => true,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
    1 => [
      'name' => 'title',
      'type' => 'text',
      'label' => 'Title',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
        'multiline' => false,
        'showCount' => true,
        'readonly' => false,
        'placeholder' => NULL,
        'minlength' => NULL,
        'maxlength' => NULL,
        'list' => NULL,
      ],
    ],
    2 => [
      'name' => 'slug',
      'type' => 'text',
      'label' => 'Slug',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
        'multiline' => false,
        'showCount' => true,
        'readonly' => true,
        'placeholder' => NULL,
        'minlength' => NULL,
        'maxlength' => NULL,
        'list' => NULL,
        'slugField' => 'title',
      ],
    ],
    3 => [
      'name' => 'price',
      'type' => 'number',
      'label' => 'Price',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
    4 => [
      'name' => 'description',
      'type' => 'wysiwyg',
      'label' => 'Description',
      'info' => '',
      'group' => '',
      'i18n' => false,
      'required' => false,
      'multiple' => false,
      'meta' => [
      ],
      'opts' => [
      ],
    ],
  ],
  'preview' => [
  ],
  'group' => '',
  'meta' => NULL,
  '_created' => 1733241685,
  '_modified' => 1733296670,
  'color' => NULL,
  'revisions' => false,
];